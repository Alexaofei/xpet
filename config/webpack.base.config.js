const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    game: path.resolve(__dirname, '../src/views/game/index.js'),
    wallet: path.resolve(__dirname, '../src/views/wallet/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // filename: '[name].js',
    filename: '[name].[contenthash:7].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    // devMiddleware: {
    //   writeToDisk: process.env.NODE_ENV === 'production',
    // },
  },
  // externals: {
  //   vue: 'Vue',
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `import '@/style/variables.scss'`,
  //     },
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.(jpg|png|jpeg|gif|bmg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024,
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@import '@/style/variables.scss';`,
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
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.vue', '.js', '.css', '.less', 'scss'],
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../src/views/wallet/index.html'),
      chunks: ['wallet'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
        },
      ],
    }),
    new webpack.IgnorePlugin({
      checkResource(resource) {
        // do something with resource
        return /\.md$/.test(resource);
      },
    }),
  ],
};
