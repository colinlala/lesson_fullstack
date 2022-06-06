<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-06 19:24:07
 * @LastEditTime: 2022-06-06 20:53:57
 * @Description: 
-->
- 锚点
    - 页面的电梯，PC时代，内容高度太那啥，有用
    - react 响应式开发，区别于DOM编程，+ react-router 加持 全家桶开发，单页应用 Single Page Application-SPA。

- 锚点 hash # url 加#
    - url 发生了改变，页面没有重新跳转
    - ：3000/#aaa  当页面上去找name aaa的a，不像传统a，向服务器重新发出请求，页面会白一下，SPA单页面应用专门解决，前端路由的底层

- npm i react-router react-router-dom

- react-router 为前端带来了路由功能
    1. HashRouter   #/about   早期，兼容性更好
        react-router 捕获hashChange事件，当点击Link组件，拿着不同的hash -> Routes(Route)找到相应的页面级组件，动态切换，单页应用(不用为了显示不同的页面去白一下)，幻灯片一样切换不同的页面。
    2. BrowserRouter  /about  看上去更像传统（后端）路由
        不好兼容？html5 history API