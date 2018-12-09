const
    webpack = require('webpack');
const
    path = require('path');

const
    staticsPath = path.join(__dirname, 'src/main/resources/static/dist');
module.exports = {
    entry: {
        app:"./javascript/index"
    },//已多次提及的唯一入口文件
    output: {
        path: staticsPath,//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    }
}