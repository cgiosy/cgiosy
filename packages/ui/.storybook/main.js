module.exports = {
	core: { builder: "@storybook/builder-vite" },
	framework: "@storybook/react",
	addons: ["@storybook/addon-essentials", "@storybook/addon-knobs"],
	staticDirs: ["../public"],
	stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.@(jsx|tsx)"],
};
