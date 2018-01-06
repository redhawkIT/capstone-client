// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // debug: true,
  devtool: '#eval-source-map',
  // context: path.join(__dirname, 'app', 'js'),

  entry: [
    'react-hot-loader/patch',
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'app/index.js')
  ],
  stats: {
    chunks: false
  },
  output: {
    path: path.join(__dirname, 'app', 'js'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/template.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // new
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {
    rules: [{ test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }] }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',

          options: {
            modules: true,
            localIdentName: '[name]---[local]---[hash:base64:5]'
          }
        }]
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',

          options: {
            modules: true,
            localIdentName: '[name]---[local]---[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader'
        }]
      }]
  }
}
