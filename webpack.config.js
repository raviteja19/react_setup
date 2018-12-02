const path = require('path');
module.exports  = {
   entry: './webcontent/js/main/index.js',
   output: {
      path: path.join(__dirname, '/'),
      publicPath: '/',
      filename: 'index.js',
   },
   devServer: {
	  historyApiFallback: true,
	  contentBase: './',
	  hot: true,
      inline: true,
      port: 8086
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
      ]
   }
};
