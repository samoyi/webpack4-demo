const merge = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:8].js',
    },
});
