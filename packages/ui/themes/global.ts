import $$css from "ddcss";
import okhsl from "@cgiosy/utils/okhsl";

type DefineColorsArgs = {
	prefix: string;
	steps: number[];
	hsl: (step: number) => [number, number, number];
};

const HUE = 265;

export const colorVariations = 16;

export const defineColors = ({ prefix, steps, hsl }: DefineColorsArgs): any => Object.fromEntries(
	steps.map((step) => [
		`$${prefix}${step}`,
		okhsl(...hsl(step / colorVariations * 100))
			.map(Math.round)
			.join(","),
	]),
);

export const calcAccentColor = (lightness: number, saturation: number): [number, number, number] => [
	HUE,
	112.5 - saturation * 0.875,
	lightness,
];

export const calcGrayColor = (lightness: number, saturation: number): [number, number, number] => [
	HUE,
	saturation * 0.125 + 0.125,
	lightness,
];

export const calcTonalGrayColor = (lightness: number, saturation: number): [number, number, number] => [
	HUE,
	saturation * 0.25 + 0.25,
	lightness,
];


export const calcErrorColor = (lightness: number, saturation: number): [number, number, number] => [
	20,
	125 - saturation,
	lightness,
];

const fontNamesToStr = (fontNames: string[]) => (
	fontNames.map((fontName) => `"${fontName}"`).join(",")
);

export const { $css, css } = $$css({
	$$_hover: (value) => ({ "&:hover, &:active, &:focus": value }),
	$$_active: (value) => ({ "&:active, &:focus": value }),

	$$: (key) => (
		/^[\d_]+dp$/.test(key) && `${Number(key.slice(0, -2).replace("_", ".")) / 16}rem`
		|| /^accent\d+$/.test(key) && `rgba(${okhsl(260, 13, Number(key.slice(6)))})`
	),

	$$userSelect: (value) => ({
		WebkitUserDrag: value,
		WebkitUserSelect: value,
		userSelect: value,
	}),

	$$transitions: ([duration, properties, easing = "linear"]: [number, string[], string | undefined]) => ({
		transition: properties.map((property) => `${property} ${duration}ms ${easing}`).join(", "),
	// eslint-disable-next-line object-curly-newline
	}),

	$$square: (size: number) => ({
		width: size,
		height: size,
	}),

	$mono: fontNamesToStr([
		"Menlo",
		"Noto Sans Mono CJK KR",
		"Monaco",
		"Hack",
		"D2Coding ligature",
		"D2 Coding ligature",
		"D2Coding",
		"D2 Coding",
		"Consolas",
		"monospace",
	]),
	$sans: fontNamesToStr([
		"Pretendard",
		"Apple SD Gothic Neo",
		"Noto Sans CJK KR",
		"Noto Sans KR",
		"본고딕",
		"KoPubDotum",
		"나눔바른고딕",
		"NanumBarunGothic",
		"나눔고딕",
		"NanumGothic",
		"sans-serif",
	]),

	WebkitTapHighlightColor: "transparent",

	fontFamily: "$sans",
	minHeight: "100vh",
	margin: 0,
	lineHeight: 1.5,
	textRendering: "optimizeLegibility",

	// https://github.com/hankchizljaw/modern-css-reset
	boxSizing: "border-box",
	"*, *:before, *:after": { boxSizing: "inherit" },

	"&:focus-within": { scrollBehavior: "smooth" },
	"& h1, & h2, & h3, & h4, & h5, & h6, & p, & figure, & blockquote, & dl, & dd": { margin: 0 },
	"& ul[role='list'], & ol[role='list']": { listStyle: "none" },

	"& a:not([class])": { textDecorationSkipInk: "auto" },

	"& input, & button, & textarea, & select": {
		color: "inherit",
		background: "transparent",
		font: "inherit",
	},

	"@media (prefers-reduced-motion: reduce)": {
		"& *, & *:before, & *:after": {
			animationDuration: ".01ms !important",
			animationIterationCount: "1 !important",
			transitionDuration: ".01ms !important",
			scrollBehavior: "auto !important",
		},
	},

	// https://www.zachleat.com/web/fluid-images/
	"& img": {
		display: "block",
		maxWidth: "100%",
	},
	"& img[width][height]": { height: "auto" },
	"& img[src$='.svg']": {
		width: "100%",
		height: "auto",
		maxWidth: "none",
	},

	// https://twitter.com/hankchizljaw/status/1352270504577675265
	"& [id]": { scrollMarginTop: "2ex" },
}, { root: "body" });
