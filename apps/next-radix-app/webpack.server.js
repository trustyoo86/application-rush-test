const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry:
    process.env.STAGE === 'local' ? './src/server/next.ts' : slsw.lib.entries,

  target: 'node',

  externals: [nodeExternals(), 'aws-sdk'],

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, './next/serverless'),
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
    new webpack.DefinePlugin({
      __STAGE__: JSON.stringify(process.env.STAGE),
    }),
  ],
};
