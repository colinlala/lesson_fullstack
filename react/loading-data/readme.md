<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 16:32:40
 * @LastEditTime: 2022-05-28 16:44:21
 * @Description: 
-->
- 前端在3000端口
- json-server数据库服务在1234端口
- 文章列表显示到页面上
    ```js
        //promise   pending
        fetch('http://localhost:1234/posts')
            // fulfilled
            .then(()=>{    
                // json 数组 -> jsx数组 -> 显示到页面上
                // setPosts  useState响应式
            })
    ```