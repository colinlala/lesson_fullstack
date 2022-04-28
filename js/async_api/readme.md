<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 14:40:00
 * @LastEditTime: 2022-04-28 16:03:49
 * @Description: 
 * 
-->
# 异步之数据请求

1. xhr 与 fetch 关系？
    - 功能都是一样的，xhr旧时代的，fetch es6 最新的api。
        ````js
        fetch('http://127.0.0.1:3000/posts')
            .then(data => data.json())
            .then(data => data)
        ```
    - const xhr = new XMLHttpRequest   xhr 实例
        ```js
        // request有多种请求方法  get明文  post加密 
        xhr.open("GET", url, true);   

        // 发送请求
        xhr.send();

        xhr.onreadystatechange = function(event){
            event.target.readyState   // 4
            JSON.parse(event.target.responseText)   //JSON
        }
        ```