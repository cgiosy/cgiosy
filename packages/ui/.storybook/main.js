const { mergeTo } = require("@cgiosy/env-react");

module.exports = {
	core: { builder: "@storybook/builder-vite" },
	framework: "@storybook/react",
	addons: ["@storybook/addon-essentials", "@storybook/addon-knobs"],
	features: { storyStoreV7: true },
	staticDirs: ["../public"],
	stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(jsx|tsx)"],
	viteFinal: (config) => mergeTo(config, { resolve: { dedupe: ["@storybook/client-api"] } }),
};
