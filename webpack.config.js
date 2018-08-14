const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

// NODE_ENV to production
// uglify

var config = {
  entry: './app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  
module: { 
  rules: [ 
    { test: /\.(js)$/, exclude: /(node_modules)/, use: 'babel-loader' }, 
    { test: /\.css$/, use: ['style-loader', 'css-loader' ]}, 
    { test: /\.(jsx)$/, use: 'babel-loader' },
    { test: /\.svg$/, use: 'file-loader' },
  ] },


  devServer: {
    historyApiFallback: true,
  },
  // eslint-disable-next-line
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html',
  })],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};

module.exports = config;