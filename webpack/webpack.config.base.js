const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const parentDir = path.join(__dirname, '../');

module.exports = {
  entry: [
    path.join(parentDir, 'index.js'),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            },
          },
          'url-loader?limit=10000',
        ],
      },
      {
        test: /\.(scss|css)$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  output: {
    path: `${parentDir}/dist`,
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'main.css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
