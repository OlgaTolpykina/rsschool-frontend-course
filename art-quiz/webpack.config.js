const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loader = require('sass-loader');
const babelPolyfill = require('babel-polyfill');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: ['babel-polyfill', './src/index.js', './src/styles/style.scss'],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
        },

        module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-runtime']
                  }
                }
              },
              {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
              },
              {
                test: /\.(png|jpe?g|gif|ogg|wav|mp3)$/,
                type: 'asset/resource'
              },
              {
                test: /\.svg/,
                type: 'asset/inline'  
              },
              {
                test: /\.html$/,
                loader: "html-loader",
              }
            ]
        },

        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'style.css'
            }),
            new CopyPlugin({
              patterns: [
                { from: "src/js/imagesRu.json" }
              ],
            }),
        ],
    };

    return config;
}