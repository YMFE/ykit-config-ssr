'use strict'

var path = require('path');
var child_process = require('child_process');
const appRoot = __dirname.split('node_modules')[0];

exports.usage = '启动';

exports.setOptions = function(optimist) {
    // 如果需要支持命令参数，写成如下形式
    // optimist.alias('f', 'foobar');
    // optimist.describe('f', '<配置项描述>');
};

exports.run = function(options) {
    require(path.join(appRoot, 'ssr/bin/start'))
};
