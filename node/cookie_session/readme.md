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
