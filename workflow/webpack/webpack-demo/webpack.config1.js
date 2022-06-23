const path = require('path')  // 使用commen js 模块化方案，引入path内容模块
// __dirname 物理路径
// console.log(__dirname);  // E:\lesson_fullstack\workflow\webpack\webpack-demo
// console.log(path.join(__dirname, 'dist'));  // E:\lesson_fullstack\workflow\webpack\webpack-demo\dist

module.exports = {
    // development 的话很复杂的代码  production 就很简洁
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    }
}