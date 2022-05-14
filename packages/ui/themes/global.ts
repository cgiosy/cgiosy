import $$css from "ddcss";

const fontNamesToStr = (fontNames: string[]) => (
	fontNames.map((fontName) => `"${fontName}"`).join(",")
);

export const { $css, css } = $$css({
	$$_hover: (value) => ({ "&:hover, &:active, &:focus": value }),
	$$_active: (value) => ({ "&:active, &:focus": value }),

	$$userSelect: (value) => ({
		WebkitUserSelect: value,
		userSelect: value,
	}),

	$$lineHeight: (lh) => ({
		lineHeight: (
			lh === "heading"
				? 1.2
				: lh === "content"
					? 1.5
					: lh
		),
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

	$lowEmphasis: "rgba($gray0, 0.375)",
	$mediumEmphasis: "rgba($gray0, 0.625)",
	$highEmphasis: "rgba($gray0, 0.875)",

	// https://github.com/hankchizljaw/modern-css-reset
	boxSizing: "border-box",
	"*, *:before, *:after": { boxSizing: "inherit" },

	"html:focus-within": { scrollBehavior: "smooth" },
	"body, h1, h2, h3, h4, h5, h6, p, figure, blockquote, dl, dd": { margin: 0 },
	"ul[role='list'], ol[role='list']": { listStyle: "none" },

	" body": {
		minHeight: "100vh",
		textRendering: "optimizeLegibility",
		lineHeight: "$contentHeight",
		fontFamily: "$sans",
	},
	"a:not([class])": { textDecorationSkipInk: "auto" },

	"input, button, textarea, select": { font: "inherit" },

	"@media (prefers-reduced-motion: reduce)": {
		"*, *:before, *:after": {
			animationDuration: ".01ms !important",
			animationIterationCount: "1 !important",
			transitionDuration: ".01ms !important",
			scrollBehavior: "auto !important",
		},
	},

	// https://www.zachleat.com/web/fluid-images/
	"img, picture": {
		display: "block",
		maxWidth: "100%",
	},
	"img[width][height]": { height: "auto" },
	"img[src$='.svg']": {
		width: "100%",
		height: "auto",
		maxWidth: "none",
	},

	// https://twitter.com/hankchizljaw/status/1352270504577675265
	"[id]": { scrollMarginTop: "2ex" },
});
