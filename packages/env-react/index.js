const { eslintrc: base, mergeTo } = require("@cgiosy/env-base");

const eslintrc = {
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	ignorePatterns: ["node_modules", "!.*"],
	plugins: [
		"react",
	],
};
mergeTo(base, eslintrc);

module.exports = {
	eslintrc,
	mergeTo,
};
