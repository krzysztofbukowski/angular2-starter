/*jshint esversion: 6 */
(function() {
    "use strict";

    const
        webpack = require('webpack'),
        HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
        devtool: 'source-map',
        entry: {
            main: "./src/main.js",
            vendor: "./src/app/vendor.ts",
            polyfills: "./src/app/polyfills.ts",
        },

        output: {
            path: __dirname + "/dist",
            filename: "[name].js",
            publicPath: "/",
            // sourceMapFilename: "[name].js.map"
        },

        resolve: {
            extensions: ['.ts', '.js', '.map.js']
        },

        module: {
            rules: [{
                    test: /\.ts$/,
                    loaders: [{
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'src/tsconfig.json'
                        }
                    }]
                },
            ]
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                }
            }),
            new HtmlWebpackPlugin({
                  template: 'src/index.html'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['main', 'vendor', 'polyfills']
            }),
        ]
    };
})();
