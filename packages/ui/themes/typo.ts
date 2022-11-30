import { CSSObject } from "ddcss";
import { defineTypo, fontNames } from "../utils/typo";

const typo = (type: "Display" | "Heading" | "Body", level: number) => ({
	fontFamily: "$typoSans",
	fontSize: `calc($typo${type}Max - ($typo${type}Max - $typo${type}Min) / 5 * ${level - 1})`,
	lineHeight: `$typo${type}Height`,
	letterSpacing: `$typo${type}Spacing`,
});

export default {
	...defineTypo("Display", {
		min: "3rem",
		max: "6.75rem",
		height: "calc(1em + 0.5rem)",
		spacing: "-0.0625em",
	}),
	...defineTypo("Heading", {
		min: "1rem",
		max: "4rem",
		height: "calc(1em + 0.5rem)",
		spacing: "-0.03125em",
	}),
	...defineTypo("Body", {
		min: "0.75rem",
		max: "1.5rem",
		height: "calc(2em - 0.5rem)",
		spacing: "0",
	}),

	$typoMono: fontNames([
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

	$typoSans: fontNames([
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

	// Global macro
	$$typo: (key) => (
		key[0] === "d" && typo("Display", Number(key.slice(1)))
		|| key[0] === "h" && typo("Heading", Number(key.slice(1)))
		|| typo("Body", Number(key))
	),
} as CSSObject;
