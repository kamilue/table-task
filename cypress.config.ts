const { defineConfig } = require('cypress');
const webpackConfig = require('./webpack.config');

module.exports = defineConfig({
  fixtureFolder: 'cypress/fixtures',
  requestTimeout: 30000,
  defaultCommandTimeout: 60000,
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig,
    },
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setUpNodeEvents(on, config) {
      // eslint-disable-next-line
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
