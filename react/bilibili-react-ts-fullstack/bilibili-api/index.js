// api后端服务的单点入口文件 src/main.tsx
const Koa = require('koa')   // http server
const router = require('koa-router')()   // koa路由中间件  BrowserRouter
const app = new Koa(); // 意思是把 web server 理解为 server app
// const crossDomain = require('./middleware/cross-domain')  // 支持跨域
const  cors = require('koa-cors')
const {
    fetchSuggest,
    fetchHotword,
    fetchSearchData,
} = require('./api')

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

// 添加了一个路由中间件
// ctx 上下文对象 = req + res
router.get("/search/suggest", async (ctx, next) => {
    // ctx.query  请求对象汇总的查询参数
    // ?a=1&b=2 查询参数 设置{a:1 ,b:2}
    const w = encodeURI(ctx.query.w);  // 编码  确保url在传输非acsi码传输丢失
    // ctx.body = w
    // console.log(w, '------------')
    try{
        const data = await fetchSuggest(w);
        // console.log(data);

        // api 前后端交互的数据格式JSON 
        let resData = {
            code: "1",   // 成功响应 200
            msg: "success"  // 成功  |  失败原因
        }
        if (data.code === 0) {   // 动态添加数据
            resData.data = data.result;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        // ctx.set('content-type', 'json');
        ctx.body = resData
    } catch(e) {
        // 处理错误
        next(e)
    } 
})

// 接口服务
router.get("/search/hotword", async (ctx, next) => {
    try {
        const data = await fetchHotword(); // 后端远程调用：rpc 调用
        let resData = {
            code: "1", // 成功响应200
            msg: "success" // 成功 | 失败原因
        }
        if (data.code === 0) { // B站code === 0
            resData.data = data.list;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

router.get("/search/all", async (ctx, next) => {
    const w = encodeURI(ctx.query.keyword);  // ?后面是keyword=...
    try {
        const data = await fetchSearchData(w); // 后端远程调用：rpc 调用
        let resData = {
            code: "1", // 成功响应200
            msg: "success" // 成功 | 失败原因
        }
        if (data.code === 0) { // B站code === 0
            resData.data = data.data;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})

// 跨域工具
app.use(cors())
// app.use(crossDomain)

// 挂载上面的中间件
app.use(router.routes())

// ctx   req 用户请求 + 中间件 +  res 响应结果
// 中间件函数
app.use(ctx => {
    ctx.body = 'hello world'
})

app.listen(3300);

