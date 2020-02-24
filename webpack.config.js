/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        path.join(__dirname, 'src/js/index.js'),
        path.join(__dirname, 'src/css/index.scss'),
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/script.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [autoprefixer],
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            path: path.join(__dirname, 'build'),
            filename: 'css/style.css',
        }),
    ],
};
