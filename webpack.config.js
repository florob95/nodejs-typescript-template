'use strict';
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = (env = {}) => {
  const config = {
    entry: ['./src/app.ts'],
    output: {
      filename: 'app.js',
    },
    mode: env.development ? 'development' : 'production',
    target: 'node',
    externals: [nodeExternals()],
    devtool: env.development ? 'cheap-eval-source-map' : false,
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['node_modules', 'src', 'package.json'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
      ],
    },
    plugins: [new CleanWebpackPlugin()]
  };
  if (env.nodemon) {
    config.watch = true;
    config.plugins.push(new NodemonPlugin());
  }
  return config;
};
