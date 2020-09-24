'use strict';

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js',
    path: './dist',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
