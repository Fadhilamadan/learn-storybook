const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@chakra-ui/storybook-addon",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  features: {
    emotionAlias: false,
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src"),
    ];

    return config;
  },
};
