const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ip = require("ip");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    host: ip.address(),
    port: 8080
  },
});