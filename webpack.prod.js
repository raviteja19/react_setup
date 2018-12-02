const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './webcontent/js/main/index.js',
  output: {
    path: path.join(__dirname, '/'),
    filename: 'index.min.js',
    publicPath: '/',
  },
  devServer: {
	  historyApiFallback: true,
	  contentBase: './',
	  hot: true,
      inline: true,
      port: 8086
   },
   resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         }
    ],
  },
};