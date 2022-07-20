- cookie session
    - 识别用户状态
- http服务怎么启动？
    - 用到的是 node 的哪个模块？ 用什么方法 
    1. node 内置了http模块，少数几行代码就可以
    2. http 设置成请求响应且无状态
        - 分布式的概念  git分布式？  本地  remote 合作者的不同的电脑上
        - 互联  IP   http://localhost/      127.0.0.1
            - TCP IP 双方
        - 端口？ 
            - 系统 linux centos ubuntu  就好像某一个进程，web server ，端口
            - A IP -> B (web server)
            - 多项服务  mysql 数据库服务  3306  邮件服务  

- 怎么看到页面的？
    - http层：
    1. 用户输入一个url  www.baidu.com  方便记忆（域名）
    2. www.baidu.com  通过dns解析 domain sysytem ，ip 地址
        - ping www.baidu.com     36.152.44.95
        1. 以前访问过baidu.com
            - 本地就会有dns缓存   host文件
        2. 访问没有访问过的网站
            - 会到局域网，dns服务器，有给 key value数据库
        3. 写入到本地的 dns 缓存

    3. ip TCP/IP  三次握手
        - A url method http + IP(自己的，服务器的)  发送请求
        - 服务器IP  交给相应的进程   通过url解析端口 ， 端口 -> 进程（映射）
        - web server 的 createServer callback 执行   res.end('')返回结果
        - res解析出A的IP ，拿到返回结果


- `npx nodemon main.js` npx直接运行node_moduled里面的nodemon，然后localhost：1314/logo.jpeg 就可以访问静态资源

- node 和 redux 实现功能的思路有点像
    - 中间件思想，启用中间件为应用提供功能
    - 第三方的中间件，**koa-static**，静态资源服务器的搭建
        - `app.use(staticServer(path.join(__dirname,'./static')))`
        - 这个静态资源会自动去做缓存
    ```js
        app.use(async ctx => {
           // 最普通的中间件 
        })
    ```

- httpOnly  安全的设置 cookie属性
    - true  js 不可以读取，  避免 XSS 跨站脚本攻击
    - false  设置  主题设置...没有重要的东西

- session ? 
    - 又一种识别用户身份状态的
    - cookie 不够用了（4kb），才又来一个session
    - cookie 每次请求都会带上，**性能低**，速度就慢了，
    - cookie 是在每次请求中带上的，客户端和服务器端都有状态标记
        - uid 不足够识别用户，用户表有很多字段，不够用
        - 在内存中，为每一个访问用户，提供一个状态存储的空间，比cookie 会从容一些（空间更大），方便业务展开，如 uid关联外键...
    - session 存储表示用户状态，只在后端内存中
        - cookie 带上 uid 传到服务器端来了，通过uid这个钥匙到session（key value） 内存表数据表，以后要用直接拿出来
    - session 基于 cookie