const webpack = require('webpack');


const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    'chrome/index': './src/chrome/index',
    'firefox/index': './src/firefox/index',
  },
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js',
  },
  cache: true,
  stats: {
    colors: true,
  },
  resolve: {
    extensions: ['.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: !IS_PRODUCTION,
      minimize: IS_PRODUCTION,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    ...(() => IS_PRODUCTION ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ] : [])(),
  ],
};
