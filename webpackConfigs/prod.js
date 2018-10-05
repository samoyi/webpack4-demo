const path = require('path');
const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        // 每次生产构建，生成的所有文件都放在本次 hash 命名的文件夹里
        path: path.resolve(__dirname, '../dist') + '/[hash]',

        // 生产构建的 chunk 输出都带  chunkhash
        filename: '[name].[chunkhash:8].js',
        chunkFilename: '[name].[chunkhash:8].bundle.js',
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
                    // 生产环境相比开发，输出的文件将放在 CDN
                    publicPath: 'http://www.mycdn.com/assets/'
                },
            },
        ],
    },
});
