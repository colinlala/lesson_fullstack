<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 19:35:27
 * @LastEditTime: 2022-05-25 20:56:48
 * @Description: 
-->
# 第一次综合应用

- npm包有个指定可以查找的地方，npmjs.org查询package说明书
    1. "lodash": "^4.17.4", js功能工具库
    2. "lokijs": "^1.5.1",  数据库
    3. "moment": "^2.19.1", 日期工具库
    4. "semantic-ui-css": "^2.2.12"  


- 分析组件化 

- 如何引入第三方css框架？
    1. vitejs react 脚手架中 import from '相对路径./当前文件夹 ../'
    2. css文件与js文件不一样
        - import 'semantic-ui-css/semantic.min.css' 一切静态资源都可被引入
        - 框架样式，根组件内引入

- 父子组件传值
    - 子组件有事情发生，要告知父组件时，父组件把函数传给子组件，子组件调用父组件传过来的函数

- semantic-ui 框架
    - 简单的类名系统

- 列表项JSX  map
