const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve("/home/clone1018/Code/MMO_MV/mv-mmo-test/js/plugins"),
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
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
       {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
   plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
