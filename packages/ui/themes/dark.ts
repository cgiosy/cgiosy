import { css } from "./global";

export default css({
	/*
		$accent5: "233,241,255",
		$accent10: "211,228,255",
		$accent15: "189,214,255",
		$accent20: "166,200,255",
		$accent30: "121,171,255",
		$accent40: "72,141,255",
		$accent50: "0,106,252",
		$accent60: "0,84,202",
		$accent70: "0,62,153",
		$accent80: "0,40,106",
		$accent85: "0,30,83",
		$accent90: "0,19,58",
		$accent95: "0,7,31",
	*/
	// +10 bonus lightness
	$accent10: "255,255,255",
	$accent15: "233,241,255",
	$accent20: "211,228,255",
	$accent30: "166,200,255",
	$accent40: "121,171,255",
	$accent50: "72,141,255",
	$accent60: "0,106,252",
	$accent70: "0,84,202",
	$accent80: "0,62,153",
	$accent90: "0,40,106",
	$accent95: "0,30,83",
	$accent100: "0,19,58",

	$gray0: "255,255,255",
	$gray5: "239,241,243",
	$gray10: "224,227,232",
	$gray15: "208,213,220",
	$gray20: "193,199,209",
	$gray30: "164,172,185",
	$gray40: "137,145,160",
	$gray50: "111,120,134",
	$gray60: "87,94,107",
	$gray70: "64,70,80",
	$gray80: "42,46,54",
	$gray85: "31,35,41",
	$gray90: "20,22,27",
	$gray95: "7,9,11",
	$gray100: "0,0,0",

	$background: "$gray90",

	$lowEmphasis: "rgba($gray0, 0.375)",
	$mediumEmphasis: "rgba($gray0, 0.625)",
	$highEmphasis: "rgba($gray0, 0.875)",

	color: "$highEmphasis",
	background: "rgb($background)",
});
