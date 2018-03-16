const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const public = path.resolve(__dirname, 'public');
const dev = path.join(__dirname + '/dev/index.jsx');


module.exports = {
  entry: dev,

  output: {
    path: public,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { test: /\.js?x$/, exclude: /node_modules/, loader: 'babel-loader' },
      
      { test: /\.scss$/, use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })}
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new Dotenv()
  ]
}




