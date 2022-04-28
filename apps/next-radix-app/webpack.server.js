const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const isProd = process.env.NODE_ENV === 'production';
const STAGE = process.env.STAGE || 'local';

module.exports = {
  mode: process.env.STAGE === 'local' ? 'development' : 'production',

  entry:
    process.env.STAGE === 'local' ? './src/server/next.ts' : slsw.lib.entries,

  target: 'node',

  // externals: [nodeExternals(), 'aws-sdk'],
  externals: [nodeExternals()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, './build/server'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'next/babel',
                {
                  'preset-env': {
                    modules: 'commonjs',
                  },
                },
              ],
            ],
          },
        },
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: `./envs/env.${STAGE}`,
    }),
  ],
};
