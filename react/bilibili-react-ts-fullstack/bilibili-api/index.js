// api后端服务的单点入口文件 src/main.tsx
const Koa = require('koa')   // http server
const router = require('koa-router')()   // koa路由中间件  BrowserRouter
const app = new Koa(); // 意思是把 web server 理解为 server app
const crossDomain = require('./middleware/cross-domain')  // 支持跨域


//  /videos  get    [{}]
router.get('/getVideos', ctx => {
    const videos = [{
        id:1,
        name:'没 有 鸡 退 可 言 1',
        pic:'https://www.bilibili.com/video/BV17N4y1g7Yb?spm_id_from=333.851.b_7265636f6d6d656e64.1&vd_source=5997b84633776e10bf5e0637b56e2159'
    },{
        id:2,
        name:'没 有 鸡 退 可 言 2',
        pic:'https://www.bilibili.com/video/BV17N4y1g7Yb?spm_id_from=333.851.b_7265636f6d6d656e64.1&vd_source=5997b84633776e10bf5e0637b56e2159'
    },{
        id:3,
        name:'没 有 鸡 退 可 言 3',
        pic:'https://www.bilibili.com/video/BV17N4y1g7Yb?spm_id_from=333.851.b_7265636f6d6d656e64.1&vd_source=5997b84633776e10bf5e0637b56e2159'
    }]
    ctx.body = videos
})

router.get('/getBanners', ctx => {
    const banners = [{

    }]
    ctx.body = banners
})

app.use(crossDomain)

// 挂载上面的中间件
app.use(router.routes())

// ctx   req 用户请求 + 中间件 +  res 响应结果
// 中间件函数
app.use(ctx => {
    ctx.body = 'hello world'
})

app.listen(3300);

