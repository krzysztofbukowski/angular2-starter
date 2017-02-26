
/*jshint esversion: 6 */
(function() {
    "use strict";

    const
        webpack = require('webpack');

    module.exports = {

        resolve: {
            extensions: ['.ts', '.js', '.map.js']
        },

        module: {
            rules: [{
                    test: /\.ts$/,
                    loaders: [{
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: __dirname + '/src/tsconfig.json'
                        }
                    }]
                },
            ]
        },
    };
})();
