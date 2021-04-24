const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    // Set the single-spa config as the project entry point
    'single-spa.config': './single-spa.config.js'
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
      {
        // This plugin will allow us to use AngularJS HTML templates
        test: /\.html$/,
        loader: 'html-loader',
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
        exclude: [path.resolve(__dirname, 'node_modules')]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [path.resolve(__dirname, 'node_modules')]
      }
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    // A webpack plugin to remove/clean the output folder before building
    new CleanWebpackPlugin()
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    historyApiFallback: true
  },
};