const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');
const Dotenv = require('dotenv-webpack');

const STAGE = process.env.STAGE || 'local';

module.exports = {
  mode: STAGE === 'local' ? 'development' : 'production',

  entry: STAGE === 'local' ? './src/server/next.ts' : slsw.lib.entries,

  target: 'node',

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
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new Dotenv({
      path: path.join(__dirname, 'envs', `.env.${STAGE}`),
    }),
  ],
};
