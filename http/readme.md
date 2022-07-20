- node 和 es6 在模块化上可以共处
    1. react  es6+
        - node cjs阶段
        - js 优点就是前后端通吃，cjs 、 esm 代码风格不太OK，两套代码
    2. 引入工程化解决
        - bebal，写的代码可以转变为能运行的代码
        - `@babel/core @babel/cli @babel/preset-env @babel/node `
        - `bebal.config.js `
            ```js
            const presets = [
                ["@babel/env",
                {
                    targets: {
                    edge: "17",
                    firefox: "60",
                    chrome: "67",
                    safari: "11.1",
                    },
                    useBuiltIns: "usage",
                }],
            ];
            module.exports = { presets };
            ```
        - `npx babel-node 1.js `运行 

- web server
    - `res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"])` 设置响应头的cookie，如：阿里国际站，`"language=cn"`
    - `req.url == '/about'` 当我们从/about访问时，自动带上cookie去访问
    - cookie 是一段文本，用于弥补http无状态的缺陷
    - http 无状态协议？ Stateless 每次请求都是独立的，没有相关性，简单 （**协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传**）
    - 一段文本 4kb key=value;key2=value2;
    - http0.9 web发明时，在大学里面通用，**在http1.0版本（微软...），增加了cookie状态**，服务器和客户端都可以种cookie，之后的每次请求，都会带上cookie
    - 服务器端解析cookie 就可以获得用户身份

- cookie 属性
    - 不同的网站，访问时带上相应的cookie（Domain 域名）
    - path 除了域名限定外，路径限定 /admin 后台
    - cookie 设置了path / 则所有路径都可以访问，设置了path /admin 则后台人员才能访问...
    - Expires  / MaxAge Cookie过期即删除 ,Expires 时间戳, /MaxAge 倒计时
    - HttpOnly , 为了安全性而来，只有js不能访问（设置为true）