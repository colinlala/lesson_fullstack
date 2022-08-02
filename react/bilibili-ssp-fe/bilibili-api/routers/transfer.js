const router = require("koa-router")();
const fetch = require('node-fetch');

router.get('/image', async (ctx, next) => {
    ctx.body = 'image'
})

module.exports = router.routes();