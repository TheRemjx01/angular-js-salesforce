const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  entry: {
    "main": [
      'font-awesome/css/font-awesome.css', // preload font awesome change from url to all url-loader
      'angular',
      'angular-fontawesome',
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'bin'),
    publicPath: '/bin/', // need to config public Path in order to hot reload html
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      // CSS
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      // IMAGE
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      // HTML
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      // FONT
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      // FONT FILE LOADER
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }

    ],
  },
  devServer: {
    compress: true,
    disableHostCheck: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: 'index.html'
    })
  ]
}