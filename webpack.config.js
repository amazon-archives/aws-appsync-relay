const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  let plugins = [];
  if (argv.mode === 'development') {
    plugins = [
      new webpack.DefinePlugin({APPSYNC_CONFIG: process.env.APPSYNC_CONFIG}),
      new HtmlWebpackPlugin()
    ]
  }
  let config = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
      overlay: {
        warnings: true,
        errors: true
      }
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: plugins
  }
  return config;
};
