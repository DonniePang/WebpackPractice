const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/static/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: "css-loader"
              }),
              stylus: ExtractTextPlugin.extract({
                use: ["css-loader", "stylus-loader"]
              })
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.styl$/,
        use: ["vue-style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000,
            name: 'images/[name].[hash:7].[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }]
      }

    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin({
      filename: "css/style.css"
    })
  ]
}
