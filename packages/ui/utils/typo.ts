import { CSSObject } from "ddcss";

export const fontNames = (fontNames: string[]) => (
	fontNames.map((fontName) => `"${fontName}"`).join(",")
);

export const defineTypo = (type: "Display" | "Heading" | "Body", { min, max, height, spacing }: {
	min: string | number,
	max: string | number,
	height: string | number,
	spacing: string | number,
}) => ({
	[`$typo${type}Min`]: min,
	[`$typo${type}Max`]: max,
	[`$typo${type}Height`]: height,
	[`$typo${type}Spacing`]: spacing,
} as CSSObject);
