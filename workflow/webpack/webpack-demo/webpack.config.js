const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')  

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module:{
        rules: [
            { test: /\.css$/, use: 'css-loader' }
          ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}