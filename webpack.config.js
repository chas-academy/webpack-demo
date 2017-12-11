const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, "src"),
  utils: path.join(__dirname, "src/utils/calc.js"),
  build: path.join(__dirname, "build")
};

module.exports = {
  entry: {
    app: PATHS.app,
    utils: PATHS.utils
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "[name].bundle.js"
  },
  plugins: [
    // Make sure webpack ignores the node_modules folder when watching for changes
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common' // Specify the common bundle's name.
    }),
    // Create a HTML page in the build directory and attach the magic bundle (app.js)
    new HtmlWebpackPlugin({
      title: "Chas Academy"
    }),
    // Tree shaking, uglify, minification and more
    // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: false,
        output: {
          comments: false,
          beautify: true
        }
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,

    watchOptions: {
      aggregateTimeout: 300,
      poll: 100
    },

    overlay: {
      errors: true,
      warnings: true
    }
  }
}
