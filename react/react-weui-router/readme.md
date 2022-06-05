<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 10:05:55
 * @LastEditTime: 2022-06-04 11:19:11
 * @Description: react-router
-->
- react 全家桶
    1. react
    2. react-router
        ```
        npm i react-router react-router-dom
        ```
        - router 路由，GET：http://localhost:3000/users/100  
            - /users/100  params
            - /users?id=1  querystring
        
        - /user 跳转到  /address
            - /user -> User组件
            - /address -> Address组件
            - /user 跳转 /address

    3. vite 创建的react项目脚手架，web server是以index.html在的根目录作为/所在地
        - src 是react开发的根路径