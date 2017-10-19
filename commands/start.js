'use strict'

var path = require('path');
var child_process = require('child_process');
const appRoot = __dirname.split('node_modules')[0];

exports.usage = '启动项目';

exports.setOptions = function(optimist) {
    optimist.alias('p', 'port');
    optimist.describe('p', '服务端口');
    optimist.alias('prod', 'prod');
    optimist.describe('prod', '生产环境启动');
};

exports.run = function(options) {
    var port = options.p || options.port || 3000,
        isProduction = options.prod ? options.prod : false

    global.__YKIT__START__PARAMS__ = {
        port,
        isProduction
    }

    var start = require(path.join(appRoot, 'ssr/bin/start'));
};
