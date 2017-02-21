/* global __dirname */

'use strict'

var webpack = require('webpack'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'eval',

    entry: {
        bundle: [
            './src/index.js',
            'webpack/hot/dev-server',
        ],
    },

    output: {
        filename: '[name].js',
        path: __dirname + '/build/js',
        publicPath: 'http://localhost:3000/',
    },

    module: {
        preLoaders: [
            {test: /\.js$/, loader: 'eslint', include: 'src'},
        ],

        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css!postcss'},
            {test: /\.json$/, loader: 'json'},
            {test: /\.svg$/, loader: 'babel!svg-react' },
            {test: /\.((woff2?)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000'},
            {test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file'},
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&localIdentName=[name]__[local]__[hash:base64:10]',
                    'postcss',
                    'sass?sourceMap',
                ],
            },
        ],
    },

    postcss: {
        defaults: [autoprefixer],
    },

    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules', './src'],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/html/index.html',
            inject: 'body',
        })
    ],

    devServer: {
        contentBase: './build/',
        inline: true,
        colors: true,
        port: 3000,
        hot: true,
    },
}
