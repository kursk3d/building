/**
 * Created by gp on 23.06.2017.
 */
const NODE_ENV = process.env.NODE_ENV || 'development';
// const NODE_ENV = 'production';
// const NODE_ENV = 'development';

const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

'use srict';
module.exports = {
    context: __dirname+"/app",
    entry: {
        // building:"./building.js"
        // imspartan:"./building.js"
        // contact:"./building.js"
        //     building: "./ContactsBuilding.js"
            contact: "./ContactsBuilding.js",
        // areiting: "./AreitingBuilding.js"
        // spinner: "./SpinnerBuilding.js"
    },
    output: {
        path: __dirname+"/public",
        filename: '[name].js',
        library: "[name]"
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 50
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,
    // devtool: null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG:     JSON.stringify('ru')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common"
        }),
        // new webpack.IgnorePlugin(/jquery-ts/)

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

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings:     false,
                drop_console: true,
                unsafe:       true
            }
        })
    );
}