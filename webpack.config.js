const path = require('path');
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
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
    ]
  }
}