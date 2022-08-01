// 路由中间件
const router = require("koa-router")();
const partitionsData = require('../data/partitions')

router.get("/partitions", async (ctx) => {
    ctx.body = {
        data: partitionsData
    }
});

module.exports = router.routes();
