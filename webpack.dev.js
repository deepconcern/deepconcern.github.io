const merge = require('webpack-merge');

const commonConfiguration = require('./webpack.common');

module.exports = merge(commonConfiguration, {
    devServer: {
        contentBase: './public/',
        
    },
    devtool: 'inline-source-map',
});
