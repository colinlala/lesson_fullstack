- react 官方脚手架
    - create-react-app
- npm -g 安装到哪里？
    - 安装的是包 paskage
    - 全局 prefix 下  npm config ls
    - 环境变量

- cnpm  国内的源
- pnpm :performant npm ，意味“高性能的 npm”。   
    - pnpm config set registry https://registry.npmmirror.com/

- npx？ 实验一些功能，或直接运行node_modules目录下的包时有用

- pnpm create vite
    - 为什么需要vite？因为vite是vue作者尤雨溪带货的工程化套件
    - 为什么vite那么快？快webpack快6倍
    1. 文件的请求 依赖 花时间
        - webpack叫bundler打包器 打包成一个文件     
        - entry -> output 罪魁祸首
        - 但是vite 没有bundler ，而且是**按需加载**，现代浏览器，直接支持es module 加载 
            - `<script type="module" src="/src/main.jsx"></script>`
            - 遇到import 都作为一个新的加载
            - 编译的过程
                - module script -> main.jsx -> 按需加载 react react-dom index.css... -> 编译器babel (实时)
                - 浏览到新的页面时，再import 编译执行

- 在vite项目中，一个import语句代表一个http请求
    - Vite Dev Server 会读取本地文件，返回浏览器可以解析的代码
    - **vite 提倡no bundle，利用浏览器原生的es模块的支持，实现开发阶段的devServer，进行模块的按需加载，而不是先整体打包再进行加载（webpack）**