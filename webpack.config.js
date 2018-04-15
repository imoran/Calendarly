var path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: "babel-loader",
      query: {
        presets: ['env']
      }
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '*']
  }
};
