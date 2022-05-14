const config = {
	framework: "@storybook/react",
	core: {
		builder: { name: "webpack5" },
		channelOptions: {
			allowFunction: false,
			maxDepth: 10,
		},
		disableTelemetry: true,
	},
	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-knobs",
	],
	stories: [
		{
			directory: "../components",
			files: "*.stories.(ts|md)x",
		},
	],
	features: {
		postcss: false,
		modernInlineRender: true,
		storyStoreV7: !global.navigator?.userAgent?.match?.("jsdom"),
		buildStoriesJson: true,
		warnOnLegacyHierarchySeparator: false,
	},
	logLevel: "debug",
};
module.exports = config;
