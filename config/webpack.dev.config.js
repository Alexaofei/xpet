const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
// const reloadServer = require('./ReloadServer');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  // devServer: {
  //   // 将 bundle 写到磁盘而不是内存
  //   devMiddleware: {
  //     writeToDisk: true,
  //   },
  //   onBeforeSetupMiddleware({ app, compiler }) {
  //     reloadServer(app, compiler);
  //   },
  // },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:7].css',
    }),
  ],
};

module.exports = () => merge(baseConfig, devConfig);
