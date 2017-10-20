'use strict';

const fs = require('fs');
const path = require('path');
const appRoot = __dirname.split('node_modules')[0];

module.exports = {
    config: {
        // 更改 Webpack 配置
        modifyWebpackConfig: function(config) {
            const webpack = this.webpack;
            config.context = path.join(appRoot, 'ssr/client');
            config.entry = './index.js';
            config.output.local = config.output.prd = {
                path: path.join(appRoot, 'dist'),
                filename: 'index.js',
                publicPath: '//q.qunarzz.com/dist/'
            };
            config.module.loaders.push(
                {
                    test: /\.(js|jsx)$/,
                    loader: require.resolve('babel-loader'),
                    exclude: [/node_modules/]
                }
            );
            config.plugins.push(
                new webpack.DefinePlugin({
                    "process.env": {
                        BROWSER: JSON.stringify(true)
                    }
                })
            );
            if(config.resolve.extensions.indexOf('.jsx') === -1) {
                config.resolve.extensions.push('.jsx');
            }
            return config;
        }
    },
    commands: [
        {
            name: 'start',
            module: require('./commands/start.js')
        },
        {
            name: 'setup',
            module: require('./commands/setup.js')
        }
    ]
}
