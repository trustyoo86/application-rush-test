const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './src/index.tsx',

  cache: false,

  mode: 'development',

  devtool: 'source-map',

  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx'],
  },

  output: {
    publicPath: 'auto',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_moduels/,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  watch: true,

  devServer: {
    port: 3003,
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './Poc': './src/components/Poc.tsx',
      },
      shared: {},
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
