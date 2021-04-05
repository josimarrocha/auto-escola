module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/stories/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/*.stories.@(js|jsx|ts|tsx)",
    "../src/styles/*.stories.@(js|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-knobs",
  ],
};
