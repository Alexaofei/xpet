const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

const prodConfig = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
};

module.exports = () => merge(baseConfig, prodConfig);
