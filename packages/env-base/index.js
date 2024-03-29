const eslintrc = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
	],
	overrides: [
		{
			files: ["*.js", "*.jsx", "*.cjs", "*.mjs"],
			rules: { "@typescript-eslint/no-var-requires": "off" },
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"@typescript-eslint",
	],
	rules: {
		"no-await-in-loop": "warn",
		"no-duplicate-imports": "error",
		"no-template-curly-in-string": "error",
		"no-unmodified-loop-condition": "warn",
		"no-unreachable-loop": "warn",
		"no-unused-vars": "off",
		"no-use-before-define": "error",

		"arrow-body-style": ["error", "as-needed"],
		"camelcase": [
			"warn",
			{
				ignoreDestructuring: true,
				properties: "never",
			},
		],
		"default-case-last": "error",
		"default-param-last": "error",
		"dot-notation": "error",
		"eqeqeq": ["error", "always", { null: "ignore" }],
		"func-names": ["error", "never"],
		"func-style": ["error", "expression"],
		"guard-for-in": "error",
		"init-declarations": ["error", "always"],
		"no-array-constructor": "error",
		"no-caller": "error",
		"no-confusing-arrow": "error",
		"no-else-return": ["error", { allowElseIf: false }],
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": ["error", { lexicalBindings: false }],
		"no-implied-eval": "error",
		"no-lone-blocks": "error",
		"no-multi-assign": ["error", { ignoreNonDeclaration: true }],
		"no-multi-str": "warn",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-proto": "error",
		"no-restricted-syntax": ["error", "FunctionExpression", "WithStatement"],
		"no-return-await": "warn",
		"no-useless-computed-key": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"object-shorthand": ["error", "properties"],
		"one-var": ["error", "never"],
		"operator-assignment": ["error", "always"],
		"prefer-arrow-callback": ["error", { allowUnboundThis: false }],
		"prefer-const": ["error", { destructuring: "all" }],
		"prefer-exponentiation-operator": "error",
		"prefer-numeric-literals": "error",
		"prefer-object-spread": "error",
		"prefer-regex-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"require-await": "error",
		"require-yield": "error",
		"sort-imports": [
			"error",
			{
				allowSeparatedGroups: true,
				ignoreCase: false,
				ignoreDeclarationSort: true,
				ignoreMemberSort: true,
				memberSyntaxSortOrder: ["single", "all", "multiple", "none"],
			},
		],
		/*
		"sort-keys": [
			"error",
			"asc",
			{
				caseSensitive: true,
				minKeys: 2,
				natural: true,
			},
		],
		*/
		"spaced-comment": "error",
		"strict": ["error", "global"],
		"yoda": ["error", "never", { onlyEquality: true }],

		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never"],
		"array-element-newline": ["error", "consistent"],
		"arrow-parens": ["error", "always"],
		"arrow-spacing": "error",
		"block-spacing": "error",
		"brace-style": "error",
		"comma-dangle": ["error", "always-multiline"],
		"comma-spacing": [
			"error",
			{
				after: true,
				before: false,
			},
		],
		"comma-style": "error",
		"computed-property-spacing": ["error", "never"],
		"dot-location": ["error", "property"],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never"],
		"function-call-argument-newline": ["error", "consistent"],
		"function-paren-newline": ["error", "multiline-arguments"],
		"generator-star-spacing": ["error", "after"],
		"implicit-arrow-linebreak": ["error", "beside"],
		"indent": ["error", "tab"],
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": ["error", { afterColon: true }],
		"keyword-spacing": [
			"error",
			{
				after: true,
				before: true,
			},
		],
		"linebreak-style": ["error", "unix"],
		"lines-between-class-members": ["error", "always"],
		"max-len": [
			"error",
			{
				code: 120,
				ignoreRegExpLiterals: true,
				ignoreTemplateLiterals: true,
				tabWidth: 4,
			},
		],
		"max-statements-per-line": ["error", { max: 1 }],
		// "multiline-ternary": ["error", "always-multiline"],
		"new-parens": ["error", "always"],
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
		/*
		"no-extra-parens": ["error", "all", {
			enforceForArrowConditionals: false,
			ignoreJSX: "multi-line",
			returnAssign: false,
		}],
		*/
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multi-spaces": ["error", { ignoreEOLComments: true }],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 2,
				maxBOF: 0,
				maxEOF: 0,
			},
		],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"no-trailing-spaces": "error",
		"no-whitespace-before-property": "error",
		"object-curly-newline": ["error", { multiline: true }],
		"object-curly-spacing": ["error", "always"],
		"object-property-newline": "error",
		"operator-linebreak": ["error", "before"],
		"padded-blocks": ["error", "never"],
		"quotes": ["error", "double", { allowTemplateLiterals: true }],
		"rest-spread-spacing": ["error", "never"],
		"semi": ["error", "always"],
		"semi-spacing": "error",
		"semi-style": ["error", "last"],
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", "never"],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"switch-colon-spacing": "error",
		"template-curly-spacing": ["error", "never"],
		"template-tag-spacing": ["error", "never"],
		"unicode-bom": ["error", "never"],
		"wrap-iife": ["error", "outside"],
		"yield-star-spacing": ["error", "after"],
	},
	settings: { react: { version: "18" } },
};

const _mergeTo = (src, dst) => {
	if (typeof dst !== "object" || dst === null) return;
	for (const key of Object.keys(src)) {
		const val = src[key];
		if (key in dst) _mergeTo(val, dst[key]);
		else dst[key] = val;
	}
};

const mergeTo = (src, dst) => {
	_mergeTo(src, dst);
	return dst;
};

module.exports = {
	eslintrc,
	mergeTo,
};
