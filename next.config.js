require("dotenv").config();
const withCss = require('@zeit/next-css');
const webpack = require('webpack');

const apiKey = JSON.stringify(process.env.SHOPIFY_API_KEY)
const API_URL = JSON.stringify(process.env.API_URL)

module.exports = withCss({
  webpack: (config) => {
    const env = { API_KEY: apiKey, API_URL };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config
  }
})