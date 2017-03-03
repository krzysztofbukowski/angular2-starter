/*jshint esversion: 6 */
(function () {
    "use strict";
    var path = require('path');

    const
        webpack = require('webpack');

    module.exports = {
        devtool: 'inline-source-map',
        resolve: {
            extensions: ['.ts', '.js', '.map.js']
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: path.resolve('src'),
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                configFileName: __dirname + '/src/tsconfig.test.json'
                            }
                        }
                    ],
                },
                {
                    test: /\.ts$/,
                    include: path.resolve('src'),
                    exclude: /\.spec.ts$/,
                    use: 'istanbul-instrumenter-loader',
                    enforce: "post"
                }
            ]
        },
    };
})();
