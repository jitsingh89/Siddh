const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = require('./webpack.config.base.js');

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurrenceOrderPlugin(),
  new UglifyJSPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
]);

module.exports = config;
