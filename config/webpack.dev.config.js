const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
// const reloadServer = require('./ReloadServer');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 9110,
    proxy: {
      '/api': {
        target: 'https://iadminmarketingtest02.luckincoffee.com/api/aapi',
        secure: false,
        changeOrigin: true,
      },
    },
    // 将 bundle 写到磁盘而不是内存
    // devMiddleware: {
    //   writeToDisk: true,
    // },
    // onBeforeSetupMiddleware({ app, compiler }) {
    //   reloadServer(app, compiler);
    // },
  },
};

module.exports = () => merge(baseConfig, devConfig);
