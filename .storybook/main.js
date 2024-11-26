module.exports = {
  stories: ['../js/*.stories.js'],

  features: {
    postcss: false
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  addons: ['@storybook/addon-webpack5-compiler-babel']
};
