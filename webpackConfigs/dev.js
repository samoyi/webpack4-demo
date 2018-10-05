const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');


// 把通用的配置和当前的开发配置合并到一起
module.exports = merge(common, {
    mode: 'development', // 默认值是`production`
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },
    devServer: { // 开发服务器读取文件的目录
        contentBase: '/dist',
    },
    // webpack-merge 不能很好的合并 loader 的`options`，所以分别在开发和生产的配置
    // 文件里独立设置
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192, // 大于 8KiB 的文件将自动改为使用 file-loader
                    name: 'images/[name].[hash:7].[ext]',
                },
            },
        ],
    },
});
