var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var include = [
    path.resolve(__dirname, '../render/')
];

module.exports = {
    cache: true,
    target: 'electron',
    entry: {
        app: path.resolve(__dirname, '../render/src/index.js'),
        vendor: ['vue', 'vuex', 'vue-router']
    },
    module: {
        rules: [
            {
                test: /\.vue$/, loader: 'vue-loader', include: include
            },
            {
                test: /\.js$/, loader: 'babel-loader', include: include
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|md)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.js',
            '@render': path.resolve(__dirname, '../render'),
            '@src': path.resolve(__dirname, '../render/src'),
            '@assets': path.resolve(__dirname, '../render/assets'),
            '@utils': path.resolve(__dirname, '../render/utils'),
            '@components': path.resolve(__dirname, '../render/src/components'),
            '@page': path.resolve(__dirname, '../render/src/pages')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(process.env.NODE_ENV)
        })
    ]
};