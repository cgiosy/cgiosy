import { iota } from "@cgiosy/utils/array";
import { css, defineColors, calcAccentColor, calcTonalGrayColor, calcErrorColor, colorVariations } from "./global";

const darkBonus = 6.25;

export default css({
	...defineColors({
		prefix: "accent",
		steps: iota(colorVariations + 1),
		hsl: (step: number) => calcAccentColor(100 + darkBonus * 4 - step, step + darkBonus * 4),
	}),

	...defineColors({
		prefix: "gray",
		steps: iota(colorVariations + 1),
		hsl: (step: number) => calcTonalGrayColor(
			100 + darkBonus * 2 - step,
			step - darkBonus * 2,
		),
	}),

	...defineColors({
		prefix: "error",
		steps: iota(colorVariations + 1),
		hsl: (step: number) => calcErrorColor(100 + darkBonus * 4 - step, step + darkBonus * 4),
	}),

	$color: "$gray2",
	$background: `$gray${colorVariations}`,

	$lowEmphasis: "rgba($color, 0.625)",
	$mediumEmphasis: "rgba($color, 0.75)",
	$highEmphasis: "rgba($color, 0.875)",

	color: "rgba($color)",
	background: "rgba($background)",
});
