'use strict';

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.[hash].js',
    // One does not need to set the output dir (output.path) as dist, as this is the default
    // I'm just gonna do it for visibility
    path: path.resolve(__dirname, './dist')
    // the publicPath option is for pulling assets in from a CDN. We're not doing that, so we don't need it.
  },
  devServer: {
    hot: true,
    watchOptions: {
      poll: true,
    },
    writeToDisk: true,
    index: 'index.html',
    contentBase: path.resolve(__dirname, './dist'),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // index.html the default filename; including for visibility here
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css-chunk.[hash].css',
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
  },
};
