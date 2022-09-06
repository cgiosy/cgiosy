import { iota } from "@cgiosy/utils/array";
import { css, defineColors, calcAccentColor, calcGrayColor, calcErrorColor, colorVariations } from "./global";

export default css({
	...defineColors({
		prefix: "accent",
		steps: iota(colorVariations + 1),
		hsl: (step: number) => calcAccentColor(step, step),
	}),

	...defineColors({
		prefix: "gray",
		steps: iota(colorVariations + 1),
		hsl: (step: number) => calcGrayColor(step, step),
	}),

	...defineColors({
		prefix: "error",
		steps: iota(colorVariations + 1),
		hsl: (step: number) => calcErrorColor(step, step),
	}),

	$color: "$gray2",
	$background: `$gray${colorVariations}`,

	$lowEmphasis: "rgba($color, 0.625)",
	$mediumEmphasis: "rgba($color, 0.75)",
	$highEmphasis: "rgba($color, 0.875)",

	color: "rgba($color)",
	background: "rgba($background)",
});
