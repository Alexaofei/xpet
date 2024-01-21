const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const reloadServer = require('./ReloadServer');

module.exports = () =>
  merge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    devServer: {
      // 将 bundle 写到磁盘而不是内存
      devMiddleware: {
        writeToDisk: true,
      },
      onBeforeSetupMiddleware({ app, compiler }) {
        reloadServer(app, compiler);
      },
    },
  });
