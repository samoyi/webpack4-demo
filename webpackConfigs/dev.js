const merge = require('webpack-merge');
const common = require('./common.js');

// 把通用的配置和当前的开发配置合并到一起
module.exports = merge(common, {
    mode: 'development', // 默认值是`production`
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    devServer: { // 开发服务器读取文件的目录
        contentBase: '/dist',
    },
});
