const path = require('path')

module.exports = {
  stories: ['../stories/*.stories.js'],
  features: {
    postcss: false,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  addons: ['@storybook/addon-webpack5-compiler-babel'],
  // The advanced stories reuse the shared TodoMVC components from ../../js,
  // which live outside this directory. Resolve bare imports (react,
  // classnames, …) against advanced/node_modules so those root files compile
  // against a single dependency tree.
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {}
    config.resolve.modules = [
      path.resolve(__dirname, '../node_modules'),
      'node_modules',
    ]
    return config
  },
}
