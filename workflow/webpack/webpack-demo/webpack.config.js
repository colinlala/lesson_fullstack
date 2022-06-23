const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: '[name].[contenthash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/, 
                exclude:/node_modules/,
                loader:"babel-loader"

            },
            { 
                test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ] 
            }
        ]
    },
    devServer:{
        compress:true,
        port:1314
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        })
    ]
}