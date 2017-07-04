var webpack = require('webpack');
var path = require('path');

module.exports ={
  entry: "./client/react/index.jsx",
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.scss?$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      }
    ]
  }
}