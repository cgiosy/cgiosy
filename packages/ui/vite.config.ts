import babel from "@rollup/plugin-babel";
import css from "rollup-plugin-css-only";
import linariaEsbuild from "@linaria/esbuild";
import linariaRollup from "@linaria/rollup";
import react from "@vitejs/plugin-react";

const dev = process.env.NODE_ENV !== "production";

export default {
	esbuild: {
		bundle: true,
		jsxInject: `import * as React from "react"`,
		plugins: [linariaEsbuild({ sourceMap: dev })],
	},
	plugins: [
		linariaRollup({ sourceMap: dev }),
		css({ output: "styles.css" }),
		babel({
			babelHelpers: "bundled",
			plugins: [
				[
					"module-resolver",
					{ alias: { components: "./src/components" } },
				],
			],
			presets: [
				"@babel/preset-env",
				"@babel/preset-react",
				"@linaria",
			],
		}),
		dev ? [react()] : [],
	],
};
