const CopyPlugin = require('copy-webpack-plugin');
const { config } = require('dotenv');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path');
const { DefinePlugin } = require('webpack');

config();

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
        path: resolve(__dirname, 'public'),
    },
    plugins: [
        new CopyPlugin([
            { from: 'assets', to: '.' }
        ]),
        new DefinePlugin({
            'process.env.GITHUB_ACCESS_TOKEN': JSON.stringify(process.env.GITHUB_ACCESS_TOKEN),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        new HTMLWebpackPlugin({
            filename: join('..', 'index.html'),
            inject: 'body',
            template: resolve(__dirname, 'templates', 'index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.css', '.sass'],
    },
};
