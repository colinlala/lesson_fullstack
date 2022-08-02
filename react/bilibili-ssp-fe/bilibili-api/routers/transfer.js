const router = require("koa-router")();
const fetch = require('node-fetch');

router.get('/image', async (ctx, next) => {
    // ctx.body = 'image'
    const url = ctx.query.pic;
    // ctx.body = url     // http://i1.hdslb.com/bfs/archive/d65bdb03618ad63e067f7ca139a14cdb2020b316.jpg@320w_200h.jpg
    // 后端去访问图片，丢掉浏览器思维，http协议    请求头和浏览器不一样
    const res = await fetch(url)    // B站的图片服务器接受了
    const data = await res.buffer()  // 二进制流 -> buffer格式  
    ctx.set('Content-Type', 'images/jpeg')  // 响应头加上Content-Type  images/jpeg格式的
    ctx.body = data
})

module.exports = router.routes();