const bsconfig = require('./bsconfig.json');
const fs = require('fs');

const transpileModules = ['rescript'].concat(bsconfig['bs-dependencies']);
const withTM = require('next-transpile-modules')(transpileModules);

const isWebpack5 = true;
const config = {
  webpack: (config, options) => {
    const { isServer } = options;

    if (isWebpack5) {
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          path: false,
        };
      }
    }

    config.module.rules.push({
      test: /\.m?js$/,
      exclude: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    return config;
  },
};

module.exports = withTM(config);
