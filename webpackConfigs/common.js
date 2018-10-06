// webpack 配置分为开发环境配置和生产环境配置
// 这个文件中的开发和生产通用的配置，构建时将根据环境不同分别与融合 dev.js 或 prod.js
// 融合


const path = require('path');

// HtmlWebpackPlugin 要以插件的形式使用
const HtmlWebpackPlugin = require('html-webpack-plugin');
// vue-loader 要以插件的形式使用
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // context 的默认值是 cwd，使用 package.json 中的脚本进行构建时，就是
    // package.json 所在目录。这里的设定其实和默认值是一样的，只是写出来更容易理解。
    // 否则下面 entry 的`.`也许会被理解为当前文件所在的 webpackConfigs 目录
    context: path.resolve(__dirname, '../'),

    entry: './src/index.js', // 依赖图起点
    output: {
        // 打包输出目录因为在开发环境会直接生成在 dist，而在生产环境会放在带有本次构建
        // hash 的文件夹里，所以在 dev.js 和 prod.js 里单独设置

        // 打包的文件名和非入口文件名在开发环境和生产环境不同，生产环境也会带上 hash，
        // 所以也不在这里设置
    },
    resolve: {
        // 在默认的四个之上在加上`.vue`后缀，这样 import `.vue` 文件时不需要写后缀
        extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],

        alias: {
            // 默认加载的 vue 模块是仅运行时的，不带模板编译功能。这里参考 vue-cli
            // 的配置，使用完整版，使其可以编译模板
            'vue$': 'vue/dist/vue.esm.js',

            // src 目录的绝对路径，方便引用
            '@': path.resolve(__dirname, '../src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // 创建行内 <style>
                    'css-loader', // 把 css 编译为 CommonJS
                    'sass-loader', // 把 scss 编译为 css
                ],
            },
            {
                // 使用 babel-loader 编译 js 文件
                test: /\.js$/,
                exclude: /node_modules/, // 不编译 node_modules 里的 js 文件
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ // 创建 HtmlWebpackPlugin 插件
            // 自动生成的 index.html 会以该文件为模板，内部会包含一个 id 为 app 的
            // div，用于挂载 vue 根实例
            // 路径相对于 context
            template: './src/template.html',
        }),
        new VueLoaderPlugin(), // 创建 vue-loader 插件
    ],
};
