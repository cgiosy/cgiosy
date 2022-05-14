const { eslintrc: base, mergeTo } = require("@cgiosy/env-base");

const eslintrc = {
	extends: [
		...(base.extends ?? []),
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	ignorePatterns: [
		...(base.ignorePatterns ?? []),
		"node_modules",
		"!.*",
	],
	plugins: [
		...(base.plugins ?? []),
		"react",
	],
};
mergeTo(base, eslintrc);

module.exports = {
	eslintrc,
	mergeTo,
};
