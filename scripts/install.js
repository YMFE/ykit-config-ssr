
var fs = require('fs-extra');
var path = require('path');

const appRoot = __dirname.split('node_modules')[0];

fs.copySync(
    path.join(__dirname, '../template/ykit.js'),
    path.join(appRoot, 'ykit.js')
);
