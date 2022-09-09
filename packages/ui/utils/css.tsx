import { CSSObject } from "ddcss";
import { css } from "../themes";
import { Component, hoc } from "./hoc";

export const styled = <Props, >(
	component: Component<Props>,
	obj: string | string[] | CSSObject,
) => {
	const className = (
		typeof obj === "string"
			? obj
			: Array.isArray(obj)
				? obj.join(" ")
				: css(obj)
	);
	return hoc(component, (props) => ({
		className: (
			"className" in props
				? `${className} ${props.className}`
				: className
		),
	}));
};

export const cls = (arr: unknown[]) => (
	arr
		.flat(Infinity)
		.filter(Boolean)
		.join(" ")
);
