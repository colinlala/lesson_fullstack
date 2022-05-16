<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-16 20:29:50
 * @LastEditTime: 2022-05-16 21:29:12
 * @Description: react
-->
- npm：node package management

- react 
    - npm init @vitejs/app 初始化脚手架（最新的）创建一个react项目
        - vitejs 当前最快的脚手架
        1. 输入项目名
        2. 选择react开发框架
        3. 确定用react
            - 此时得到了一个模板项目
        4. 进入项目目录（cd）
        5. npm install（i）：根据项目描述文件（package.json），把项目依赖（dependencies+devDependencies）安装
        6. npm run dev：将项目运行

- 项目模板
    1. index.html首页模板  3000 默认
        - `<div id="root"></div>` 挂载点 #root
        - script 引入 /src/main.jsx
            1. src   js开发目录
            2. main.jsx 入口文件
            3. 当文件的后缀是jsx时，表示使用react
            4. `type="module"`支持js的模块化
            5. `import ... from '...'`引入模块

    2. `ReactDOM.render`
