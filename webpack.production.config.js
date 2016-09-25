/* global __dirname */

var WebpackStripLoader = require('strip-loader'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    devConfig = require('./webpack.config')

devConfig.output.path = __dirname + '/public/js'
devConfig.output.publicPath = 'js/'
devConfig.output.filename = '[name].min.js'

devConfig.module.loaders.push({
    test: [/\.js$/, /\.es6.js$/],
    exclude: /node_modules/,
    loader: WebpackStripLoader.loader('console.log'),
})

devConfig.plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),
    new webpack.ProvidePlugin({
        Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
        //fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './src/html/index.html',
        inject: 'body',
        hash: false,
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
        },
    }),
]

module.exports = devConfig
