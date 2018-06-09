const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'base64-inline-loader?limit=1000&name=[name].[ext]',
            options: {}
          }
        ]
      }
    ]
  },
   plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
}
