- npm init @vitejs/app
    - react 脚手架
    - 基于vitejs 工程化工具
    - npm 命令  node 默认命令

- webpack
    - 另一个 vite 
    1. tamplate
        - src 目录是开发目录
        - main.js 单点入口文件
            - import 项目组织起来
    2. package.json
    3. npm run dev 
        - 3000 端口上 http服务

- webpack 工程化流程
    1. `npm init -y` 初始化项目为node项目，工程化是node的产物，前端就更专业
    2. src/ 开发目录  main.js / index.js 入口文件
    3. `npm i webpack webpack-cli -D`  -D 开发依赖，工程化是开发阶段
    4. 把项目运行起来
        - `npx webpack`
            - src/index.js -> dist/index.js 打包的过程
        - `npx webpack --mode=development`
            - 开发阶段
        - npx 后期推出的新功能
        1. 命令行 调用package 里的npm包
        2. 默认production --mode=development 来设置当前模式
        3. 在package.json 中写入
            ```js
            "scripts": {
                "dev": "webpack --mode=development",
                "build": "webpack --mode=production"
            },
            ```
            - 然后npm run dev 后 node .\dist\main.js 可以运行 Hello lala

            - 或者然后npm run build 后 node .\dist\main.js 也可以运行 Hello lala

    5. webpack 运行后有什么效果 
        - 打包工具pack bundler，src -> dist 
            - import "a.jpg"
        - 应用场景
            - development 开发，调试便捷为主
            - production 上线 代码体积，性能

    6. webpack 默认会去找根目录下的webpack.config.js 运行
        ```js
            module.exports = {
                // development 的话很复杂的代码  production 就很简洁
                mode: 'production',
                entry: './src/index.js',    // 入口文件
                output: {                  // 出口文件
                    filename: 'bundle.js',
                    path: path.join(__dirname, 'dist')
                }
            }
        ```

    7. 何为打包的概念？
        - 从入口进入，根据依赖关系，都打包一个文件 bundle.js

    8. webpack 默认只处理js类型的文件，甚至如果你要es6->es5，也要用loader
        - css文件，需要后动添加loader （webpack可以打包一切静态资源，选配）
        - loader，加载特定类型文件处理的工具
        - css -> css-loader   `npm i css-loader -D`
        - 需要在webpack.config.js中写
            ```js
            module:{
                rules: [
                    { test: /\.css$/, use: 'css-loader' }
                ]
            }
            ```

    9. plugin 
        - `npm i html-webpack-plugin -D` 
        - webpack 有插件机制
        - html-webpack-plugin 把index.html，搬到dist目录下
        - 把打包结果bundle.js文件，自动的在index.html引入
        ```js
        plugins:[
            new HtmlWebpackPlugin({
                template:'./src/index.html'
            })
        ]
        ```
    10. script有三种加载模式：
        1. 默认加载：会阻塞DOM构建
        2. defer加载：下载照旧，但执行延后 在页面加载之前不会运行脚本
        3. async：下载完就立即执行，适合没有依赖的脚本

    11. [name].[hash:8].js
        - [name] 原来的文件名，hash唯一文件内容，只要改变了内容，就会生成新的hsah，否则绝对不变
        - 浏览器本地缓存
        - 如果更新了，main.js ? 
            - hash值？根据内容计算得到的
        - 使用hash值创建版本号

    12. `npm i clean-webpack-plugin -D` 在每次构建前清理 /dist 文件夹，只会生成用到的文件

    13. js 和 css 分离 

    14. `npm i mini-css-extract-plugin -D` 把css样式从js文件中提取到单独的css文件中

    15. `npm i webpack-dev-server@3.11.2 -D` 

    16. webpack 全家桶
        - webpack 5.73.0 
        - webpack-cli 4.10.0
        - npx weback npx -> node_modules/webpack-cli -> webpack
        - webpack-dev-server 启动http server

    17. `npm i @babel/cli @babel/core @babel/preset-env @babel/preset-react -D`