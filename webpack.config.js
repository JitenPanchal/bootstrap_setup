const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: "./js/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/app.js",
    },
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  //resolve-url-loader may be chained before sass-loader if necessary
                  use: ['css-loader', 'sass-loader']
                })
              },
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/styles.css",
        })
    ]
};

module.exports = config;