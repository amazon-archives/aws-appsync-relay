// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

if (!process.env.APPSYNC_CONFIG) {
  console.error(`APPSYNC_CONFIG env var not set!
  Ensure it is set like APPSYNC_CONFIG='{
    "UserPool": "<UserPoolId>",
    "AppSyncEndpoint": "<AppSyncEndpoint>",
    "ClientId": "<Cognito ClientId>",
    "AppSyncRegion": "<region>"
  }'`);
  process.exit(1);
}

module.exports = (env, argv) => {
  let plugins = [];
  plugins = [
    new webpack.DefinePlugin({APPSYNC_CONFIG: process.env.APPSYNC_CONFIG}),
    new HtmlWebpackPlugin({title: "AppSync + Relay"})
  ]
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
          use: {
            loader: 'babel-loader'
          }
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
