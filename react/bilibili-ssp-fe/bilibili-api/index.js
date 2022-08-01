const koa = require("koa");
const app = new koa();
// 跨域中间件
const cors = require('koa-cors');
const router = require('koa-router')();
const mainRouter = require('./routers/index')
const searchRouter = require('./routers/search')
const videosRouter = require('./routers/videos')
const rankingRouter = require('./routers/ranking')

// 挂载跨域中间件
app.use(cors())

app.use(mainRouter)

// 子节点要挂在根节点上  再次使用 koa-router
router.use('/search', searchRouter)
router.use('/videos', videosRouter)
router.use('/ranking', rankingRouter)
app.use(router.routes())


app.listen(3011, () => {
    console.log("Your app is running");
})