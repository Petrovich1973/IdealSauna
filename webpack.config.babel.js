import extractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  cache: false,
  entry: './src/index',
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
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      }
    ],
  },
};
