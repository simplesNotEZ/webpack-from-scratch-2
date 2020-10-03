'use strict';

const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/main.js'],
  // with the inject: true property from html-webpack-plugin (below), this output stuff stopped working
  // So, I'ma comment it out for now
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: 'dist/',
  // },
  devServer: {
    hot: true,
    watchOptions: {
      poll: true,
    },
    // contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   use: ['file-loader'],
      // },
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
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/images',
          to: './dist/images',
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
  },
};
