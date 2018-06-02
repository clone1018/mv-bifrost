const path = require('path');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve("/Users/clone1018/Projects/clone1018/mv-mmo-test/js/plugins"),
    filename: 'Bifrost.js'
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/, //Check for all js files
        loader: 'babel-loader',
        query: {
          presets: ["babel-preset-es2015"].map(require.resolve)
        }
      }
    ]
  }
}