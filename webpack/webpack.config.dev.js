const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const parentDir = path.join(__dirname, '../');
const config = require('./webpack.config.base.js');

module.exports = merge(config, {

  devServer: {
    inline: true,
    progress: true,
    hot: true,
    open: true,
    contentBase: parentDir,
    host:'0.0.0.0',
    port: 8000,
    historyApiFallback: true,
  }
});
