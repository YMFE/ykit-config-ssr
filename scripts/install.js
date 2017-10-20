
var fs = require('fs-extra');
var path = require('path');

var appRoot = __dirname.split('node_modules')[0];
var ykitJSContent = fs.readFileSync(path.join(__dirname, '../template/ykit.js'), 'utf-8');

if(ykitJSContent.indexOf('ssr') === -1) {
    fs.copySync(
        path.join(__dirname, '../template/ykit.js'),
        path.join(appRoot, 'ykit.js')
    );
}
