const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: resolve(__dirname, 'src', 'index.tsx'),
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.(js|ts)x?$/,
            },
        ],
    },
    output: {
        chunkFilename: '[name].bundle.js',
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'docs'),
    },
    plugins: [
        new CopyPlugin([
            { from: 'assets', to: 'assets' }
        ]),
        new DefinePlugin({
            'process.env.GITHUB_ACCESS_TOKEN': JSON.stringify(process.env.GITHUB_ACCESS_TOKEN),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new HTMLWebpackPlugin({
            inject: 'body',
            template: resolve(__dirname, 'index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.css', '.sass'],
    },
};
