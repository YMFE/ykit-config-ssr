'use strict';

const fs = require('fs');
const path = require('path');
const appRoot = __dirname.split('node_modules')[0];

module.exports = {
    config: {
        // 更改 Webpack 配置
        modifyWebpackConfig: function(config) {
            const webpack = this.webpack;
            config.context = path.join(appRoot, 'ssr/client'),
            config.output.local = config.output.prd = {
                path: path.join(appRoot, 'dist'),
                filename: 'index.js',
                publicPath: '/dist/'
            };
            config.module.loaders.push(
                {
                    test: /\.js$/,
                    loader: require.resolve('babel-loader'),
                    exclude: [/node_modules/],
                    query: {
                        presets: [
                            'es2015', 'stage-0', 'react'
                        ],
                        plugins: [
                            ['transform-runtime', {
                                polyfill: true,
                                regenerator: true
                            }]
                        ]
                    }
                }
            );
            config.plugins.push(
                new webpack.DefinePlugin({
                    "process.env": {
                        BROWSER: JSON.stringify(true)
                    }
                })
            )
            return config;
        }
    }
}
