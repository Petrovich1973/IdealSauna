import extractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  cache: false,
  entry: './src/',
  output: {
    filename: 'dist/bundle.js',
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass-loader"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ],
  },
};
