/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { startDevServer } = require('@cypress/vite-dev-server');

console.log(path.resolve(__dirname, '..', '..', 'vite.config.ts'));

module.exports = (on, config) => {
  on('dev-server:start', async (options) => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '..', '..', 'vite.config.ts'),
      },
    });
  });

  return config;
};