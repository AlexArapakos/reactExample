var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};