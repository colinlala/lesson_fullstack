// 路由中间件
const router = require('koa-router')();

router.get("/suggest", async (ctx) => {
    ctx.body = 'hello search suggest'
})

router.get("/hotword", async (ctx) => {
    ctx.body = 'hello search hotword'
})

router.get("/result", async (ctx) => {
    ctx.body = 'hello search result'
})

module.exports = router.routes();