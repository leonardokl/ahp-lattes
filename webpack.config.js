/* global __dirname */

"use strict";

var webpack = require("webpack"),
    path = require("path"),
    autoprefixer = require("autoprefixer"),
    // umd = require("webpack-umd-external"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "eval",

    entry: {
        bundle: [
            "./src/router.js",
            "webpack/hot/dev-server",
        ],
    },

    output: {
        filename: "[name].js",
        path: __dirname + "/build/js",
        publicPath: "http://localhost:9091/",
    },

    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint", include: "src"},
        ],

        loaders: [
            {test: /\.js$/, loader: "babel", exclude: /node_modules/},
            {test: /\.(es6|react)\.js$/, loader: "babel"},
            {test: /\.css$/, loader: "style!css!postcss"},
            {test: /\.json$/, loader: "json"},
            {test: /\.svg$/, loader: 'babel!svg-react' },
            {test: /\.((woff2?)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000'},
            {test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file'},
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    "style?sourceMap",
                    "css?modules&localIdentName=[name]__[local]__[hash:base64:10]",
                    "postcss",
                    "sass?sourceMap",
                ],
            },
        ],
    },

    postcss: {
        defaults: [autoprefixer],
    },

    resolve: {
        root: path.join(__dirname, "src"),
        extensions: ["", ".js", ".es6.js", ".react.js", ".react.es6.js"],
        modulesDirectories: ["node_modules", "./src"],
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: "./src/html/index.html",
            inject: "body",
        }),
        new CopyWebpackPlugin([
            {from: "./public/img/aud.svg", to: "../img"},
            {from: "./public/img/avatar.png", to: "../img"},
            {from: "./public/img/logo.png", to: "../img"},
        ]),
    ],

    devServer: {
        contentBase: "./build/",
        // noInfo: true,
        inline: true,
        colors: true,
        port: 9091,
        hot: true,
    },
};
