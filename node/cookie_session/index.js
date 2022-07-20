const http = require('http')

// http 无状态 每次 用户主动请求
// 软件概念的web服务器
http.createServer((req,res) => {
    if(req.url == '/'){
        // 结束这次用户代理和服务器的交流
        res.end('hello world')
    }
    
})

Server.listen(8080)
