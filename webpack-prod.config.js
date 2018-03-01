/*для продакшина*/
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

'use srict';
module.exports = {
    context: __dirname+"/app",
    entry: {
            contact: "./ContactsBuilding.js",
    },
    output: {
        path: __dirname+"/public",
        filename: '[name].js',
        library: "[name]"
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                comments: false,
                compress: {
                    // remove warnings
                    warnings: false,

                    // Drop console statements
                    drop_console: true
                }
            }
        })
    ]


};