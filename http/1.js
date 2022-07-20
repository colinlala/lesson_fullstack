//  写后端代码 稳定和性能为主 服务器端，node版本更新没有那么快
// 滞后的commonjs 模块化
// 前端 webpack vitejs 现代化，发展比node 快多了 es6 模块化
// const http = require('http');
// require()是同步加载，后面的代码必须等待这个命令执行完，才会执行。import命令则是异步加载

import http from "http";
// http 内置 createServer 方法 ，返回server服务
// 在 3000 端口启动 web 服务，伺服状态
// js 单线程，web服务是天生的多线程   -> 服务器的CPU是多核的，每核都可以独立运行
// node 异步 ， 事件型的
const server = http.createServer((req, res) => {
    if(req.url == '/about'){
        res.end('about us')
        return
    }
    res.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
    res.end("hello world!");
});

server.listen(3000);
