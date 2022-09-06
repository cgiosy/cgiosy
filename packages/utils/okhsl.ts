type RGB = [number, number, number];

type HalleyArgs3 = {
	x: number,
	y: number,
	z: number,
	dx: number,
	dy: number,
	dz: number,
	w: number,
};

// https://bottosson.github.io/posts/oklab
const _oklab = (l: number, a: number, b: number): RGB => {
	const L = (l + 0.3963377774 * a + 0.2158037573 * b) ** 3;
	const M = (l - 0.1055613458 * a - 0.0638541728 * b) ** 3;
	const S = (l - 0.0894841775 * a - 1.2914855480 * b) ** 3;
	return [
		+4.0767416621 * L - 3.3077115913 * M + 0.2309699292 * S,
		-1.2684380046 * L + 2.6097574011 * M - 0.3413193965 * S,
		-0.0041960863 * L - 0.7034186147 * M + 1.7076147010 * S,
	];
};

const lrgb2rgb = (x: number) => {
	const a = Math.abs(x);
	if (a <= 0.0031308) return x * 3294.6;
	const v = a ** 0.4166666666666667 * 269.025 - 14.025;
	return x < 0 ? -v : v;
};

const toeInv = (l: number) => l * (l + 0.206) / (1.170873786407767 * l + 0.03512621359223301);

const halley3 = ({ x, y, z, dx, dy, dz, w }: HalleyArgs3, wx: number, wy: number, wz: number) => {
	const x2 = x * x;
	const y2 = y * y;
	const z2 = z * z;
	const f0 = (x2 * x * wx) + (y2 * y * wy) + (z2 * z * wz) - w;
	const f1 = (dx * x2 * wx) + (dy * y2 * wy) + (dz * z2 * wz);
	const f2 = (dx * dx * x * wx) + (dy * dy * y * wy) + (dz * dz * z * wz);
	const f = f1 / (f1 * f1 * 3 - f0 * f2);
	return w === 0 || f >= 0 ? -f0 * f : Infinity;
};

const _maxSaturatation = (
	x: number,
	y: number,
	S: number,
	wl: number,
	wm: number,
	ws: number,
) => {
	const dx = +0.3963377774 * x + 0.2158037573 * y;
	const dy = -0.1055613458 * x - 0.0638541728 * y;
	const dz = -0.0894841775 * x - 1.2914855480 * y;
	return S + halley3({
		x: S * dx + 1,
		y: S * dy + 1,
		z: S * dz + 1,
		dx,
		dy,
		dz,
		w: 0,
	}, wl, wm, ws);
};

const maxSaturation = (x: number, y: number) => {
	if (-1.88170328 * x - 0.80936493 * y > 1)
		return _maxSaturatation(
			x,
			y,
			1.19086277 + 1.76576728 * x + 0.59662641 * y + 0.75515197 * x * x + 0.56771245 * x * y,
			+4.0767416621,
			-3.3077115913,
			+0.2309699292,
		);
	if (1.81444104 * x - 1.19445276 * y > 1)
		return _maxSaturatation(
			x,
			y,
			0.73956515 - 0.45954404 * x + 0.08285427 * y + 0.12541070 * x * x + 0.14503204 * x * y,
			-1.2684380046,
			+2.6097574011,
			-0.3413193965,
		);
	return _maxSaturatation(
		x,
		y,
		1.35733652 - 0.00915799 * x - 1.15130210 * y - 0.50559606 * x * x + 0.00692167 * x * y,
		-0.0041960863,
		-0.7034186147,
		+1.7076147010,
	);
};

const gamutIntersection = (x: number, y: number, L1: number, C1: number, L0: number, l: number, c: number) => {
	const dL = L1 - L0;
	if ((L1 - L0) * c <= (l - L0) * C1)
		return c * L0 / (C1 * l - c * dL);

	const t = c * (1 - L0) / (C1 * (1 - l) + c * dL);
	const L = L0 * (1 - t) + t * L1;
	const C = t * C1;

	const kl = +0.3963377774 * x + 0.2158037573 * y;
	const km = -0.1055613458 * x - 0.0638541728 * y;
	const ks = -0.0894841775 * x - 1.2914855480 * y;

	const args = {
		x: L + C * kl,
		y: L + C * km,
		z: L + C * ks,
		dx: dL + C1 * kl,
		dy: dL + C1 * km,
		dz: dL + C1 * ks,
		w: 1,
	};
	return t + Math.min(
		halley3(args, 4.0767416621, -3.3077115913, 0.2309699292),
		halley3(args, -1.2684380046, 2.6097574011, -0.3413193965),
		halley3(args, -0.0041960863, -0.7034186147, 1.7076147010),
	);
};

const cs = (l: number, x: number, y: number): [number, number, number] => {
	const cuspS = maxSaturation(x, y);
	const cuspL = Math.cbrt(1 / Math.max(..._oklab(1, cuspS * x, cuspS * y)));

	const cmax = gamutIntersection(x, y, l, 1, l, cuspL, cuspL * cuspS);
	const smid = 0.11516993 + 1 / (
		+7.44778970 + 4.15901240 * y
		+ x * (-2.19557347 + 1.75198401 * y
		+ x * (-2.13704948 - 10.02301043 * y
		+ x * (-4.24894561 + 5.38770819 * y + 4.69891013 * x
		)))
	);
	const tmid = 0.11239642 + 1 / (
		+1.61320320 - 0.68124379 * y
		+ x * (+0.40370612 + 0.90148123 * y
		+ x * (-0.27087943 + 0.61223990 * y
		+ x * (+0.00299215 - 0.45399568 * y - 0.14661872 * x
		)))
	);

	const k = cmax / Math.min(l * cuspS, (1 - l) / (1 / cuspL - 1) * cuspS);
	const cmid = 0.9 * k * Math.sqrt(Math.sqrt(1 / (1 / ((l * smid) ** 4) + 1 / (((1 - l) * tmid) ** 4))));
	const cmin = Math.sqrt(1 / (1 / ((l * 0.4) ** 2) + 1 / (((1 - l) * 0.8) ** 2)));
	return [cmin, cmid, cmax];
};

const chroma = (l: number, x: number, y: number, s: number) => {
	const [cmin, cmid, cmax] = cs(l, x, y);
	if (s < 0.8) {
		const cmins = cmin * s;
		const cmids = cmid * s;
		return (cmins * cmid) / (cmins - cmids * 1.25 + cmid);
	}
	const diff = cmax - cmid;
	const t = cmid * cmid * (s - 0.8);
	return cmid + diff * t / (t - cmin * diff * (s - 1) * 3.2);
};

export const oklab = (l: number, a: number, b: number): RGB => {
	const [x, y, z] = _oklab(l, a, b);
	return [lrgb2rgb(x), lrgb2rgb(y), lrgb2rgb(z)];
};

export const oklch = (l: number, c: number, h: number): RGB => {
	h *= Math.PI / 180;
	const x = Math.cos(h);
	const y = Math.sin(h);
	return oklab(l, c * x, c * y);
};

export const okhsl = (h: number, s: number, l: number): RGB => {
	if (l >= 1) return [255, 255, 255];
	if (l <= 0) return [0, 0, 0];

	l = toeInv(l);
	h *= Math.PI / 180;
	const x = Math.cos(h);
	const y = Math.sin(h);
	const c = chroma(l, x, y, s);
	return oklab(l, c * x, c * y);
};

export default (h: number, s: number, l: number) => okhsl(h, Math.max(0, Math.min(s / 100, 1)), l / 100);
