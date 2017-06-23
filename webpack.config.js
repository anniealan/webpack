const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: ['webpack-hot-middleware/client', './source/app.js'],
  output: {
    filename: 'bundle.js',
     path: path.join(__dirname, '/build'),
     publicPath: "http://localhost:8000/"
  },
  module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              //resolve-url-loader may be chained before sass-loader if necessary
              use: ['css-loader', 'less-loader']
        })
        }]
    },
    plugins: [
      new HtmlWebpackPlugin({
           template: './index.html',
           inject: 'body'
       }),
       new ExtractTextPlugin("main.css"),
       new webpack.HotModuleReplacementPlugin(),
     ]
}
