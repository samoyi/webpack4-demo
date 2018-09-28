const path = require('path');

// HtmlWebpackPlugin 要以插件的形式使用
const HtmlWebpackPlugin = require('html-webpack-plugin');
// vue-loader 要以插件的形式使用
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    // context 的默认值是 cwd，即 package.json 所在目录。这里的设定其实和默认值是一
    // 样的，只是写出来更容易理解。否则下面 entry 的`.`也许会被理解为当前文件所在的
    // webpackConfigs 目录
    context: path.resolve(__dirname, '../'),
    entry: './src/index.js',
    output: {
        // 打包输出目录的绝对路径
        path: path.resolve(__dirname, '../dist'),
        // 打包的文件名在开发环境和生产环境不同，生产环境会带上 hash
    },
    resolve: {
        // 在默认的四个之上在加上`.vue`后缀，这样 import `.vue` 文件时不需要写后缀
        extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
        alias: {
            // 默认加载的 vue 模块是仅运行时的，不带模板编译功能。这里参考 vue-cli 的配置，
            // 使用完整版，使其可以编译模板
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
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192, // 大于 8KiB 的文件改为使用 file-loader
                },
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader'
            //     ],
            // },
            // {
            //     test: /\.scss$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         'sass-loader'
            //     ],
            // },
            // {
            //     test: /\.sass$/,
            //     use: [
            //         'vue-style-loader',
            //         'css-loader',
            //         'sass-loader?indentedSyntax'
            //     ],
            // },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            // },
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     options: {
            //         loaders: {
            //             // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            //             // the "scss" and "sass" values for the lang attribute to the right configs here.
            //             // other preprocessors should work out of the box, no loader config like this necessary.
            //             'scss': [
            //                 'vue-style-loader',
            //                 'css-loader',
            //                 'sass-loader'
            //             ],
            //             'sass': [
            //                 'vue-style-loader',
            //                 'css-loader',
            //                 'sass-loader?indentedSyntax'
            //             ]
            //         }
            //         // other vue-loader options go here
            //     }
            // },
            // {
            //     test: /\.(jpg|png)$/,
            //     loader: 'file-loader',
            // },
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
