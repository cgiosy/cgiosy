/* eslint-disable no-use-before-define */
import { camelToKebab } from "./util";
import hashCode from "./hash";

type Digit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type Uppercase = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M"
				| "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";
type Lowercase = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m"
				| "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z";
type Char = "_" | Digit | Uppercase | Lowercase;

type Macro = {
	fn: MacroFn,
	table: MacroTable,
};
type MacroFn = (arg: unknown) => CSSObject;
type MacroTable = { [K: string]: Macro };
type CSSObject = {
	[K: string]: unknown;
	[K: `@${string}` | `${string}&${string}`]: CSSObject;
	[K: `$$${string}`]: MacroFn;
	[K: `$${Char}${string}`]: string | number;
};

const variablePattern = /(?!\\)\$[a-zA-Z0-9_]+/g;
const propertyPattern = /^\$?[a-zA-Z0-9_]+$/;

const keyToProp = (key: string) => (
	key[0] === "$"
		? `--${camelToKebab(key.slice(1))}`
		: camelToKebab(key)
);

const nameToVar = (name: string) => `var(--${camelToKebab(name.slice(1))})`;

export const stringify = (
	obj: CSSObject,
	parent = `.${hashCode(JSON.stringify(obj))}`,
	macros: MacroTable | null = null,
	outMacros: MacroTable | null = null,
) => {
	const { classBody, outsideCss } = _stringify(obj, parent, macros, outMacros);
	return classBody !== ""
		? `${parent}{${classBody}}${outsideCss}`
		: outsideCss;
};

const _stringify = (
	obj: CSSObject,
	parent: string,
	macros: MacroTable,
	outMacros: MacroTable | null,
) => {
	macros = Object.create(macros);
	let classBody = "";
	let outsideCss = "";

	for (const key of Object.keys(obj)) {
		const value = obj[key];
		if (key[0] === "$" && key[1] === "$") {
			const macroKey = key.slice(2);
			const macro: Macro = {
				fn: value as MacroFn,
				table: { ...macros }, // O(N) copy
			};
			macros[macroKey] = macro;
		} else if (key in macros) {
			const { fn, table } = macros[key];
			const result = _stringify(fn(value), parent, table, macros);
			classBody += result.classBody;
			outsideCss += result.outsideCss;
		} else if (propertyPattern.test(key)) {
			const prop = keyToProp(key);
			const body = typeof value === "string"
				? value.replace(variablePattern, nameToVar)
				: value;
			classBody += `${prop}:${body};`;
		} else if (key[0] === "@") {
			const body = stringify(value as CSSObject, parent, macros);
			if (body !== "") outsideCss += `${key}{${body}}`;
		} else {
			const selector = key.replace(/(?!\\)&/g, parent);
			outsideCss += stringify(value as CSSObject, selector, macros);
		}
	}
	if (outMacros !== null) Object.assign(outMacros, macros);

	return {
		classBody,
		outsideCss,
	};
};

const globalCss = (globalObj: CSSObject = {}, rootSelector = ":root") => {
	const macros = Object.create(null);
	let cssText = stringify(globalObj, rootSelector, macros, macros);
	const css = (obj: CSSObject, className = hashCode(JSON.stringify(obj))) => {
		cssText += stringify(obj, `.${className}`, macros);
		return className;
	};
	Object.defineProperty(css, "cssText", { get: () => cssText });
	return css;
};

export default globalCss;
