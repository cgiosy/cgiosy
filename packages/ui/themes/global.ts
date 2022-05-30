import $$css from "ddcss";

const fontNamesToStr = (fontNames: string[]) => (
	fontNames.map((fontName) => `"${fontName}"`).join(",")
);

export const { $css, css } = $$css({
	$$_hover: (value) => ({ "&:hover, &:active, &:focus": value }),
	$$_active: (value) => ({ "&:active, &:focus": value }),

	$$: (key) => /^[\d_]+dp$/.test(key) && `${Number(key.slice(0, -2).replace("_", ".")) / 16}rem`,

	$$userSelect: (value) => ({
		WebkitUserDrag: value,
		WebkitUserSelect: value,
		userSelect: value,
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

	"& input, & button, & textarea, & select": { font: "inherit" },

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
