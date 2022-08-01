// 路由中间件
const router = require('koa-router')();

router.get("/list", async (ctx) => {
    ctx.body = 'hello videos list'
})

module.exports = router.routes();