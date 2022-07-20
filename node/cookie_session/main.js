// node api -> 框架层
// react 单页应用 MVVM 模式的项目  Model View ViewModel
// 后端 模式？ MVC Model（数据模型，model）  View（html） Controller
// Model View 不能直接通信    要通过Controller来管理（业务）
const Koa = require("koa"); // 第三方 最好用的node 后端框架，遵守mvc开发范式
const app = new Koa(); // 意思是把 web server 理解为 server app
const path = require("path"); // 内置
// 支持静态服务的中间件
const staticServer = require("koa-static");
const koaSession = require("koa-session"); // 中间件
const session_signed_key = ["secret"]; // key

app.keys = session_signed_key;
const session_config = {
    key: "koa:sess" /**  cookie的key。 (默认是 koa:sess) */,
    maxAge: 1000 * 60 * 60/**  session 过期时间，以毫秒ms为单位计算 。*/,
    autoCommit: true /** 自动提交到响应头。(默认是 true) */,
    overwrite: true /** 是否允许重写 。(默认是 true) */,
    httpOnly: true /** 是否设置HttpOnly，如果在Cookie中设置了"HttpOnly"属性，那么通过程序(JS脚本、Applet等)将无法读取到Cookie信息，这样能有效的防止XSS攻击。  (默认 true) */,
    signed: true /** 是否签名。(默认是 true) */,
    rolling: true /** 是否每次响应时刷新Session的有效期。(默认是 false) */,
};
const session = koaSession(session_config, app);

// 使用中间件，注意有先后顺序
app.use(session); // 启用session
// use 启用一个中间件  函数
// app.use 就好像 redux compose
// ctx context

// 静态服务器 js css img file   就不需要声明路由
// 中间件有顺序，数组，compose
app.use(staticServer(path.join(__dirname, "./static")));
// req -> res  applyMiddleware 挂载一个中间件
// ctx = req + res
app.use(async ctx => {
    // if (ctx.req.url == )
    console.log(ctx.path, '--------------')
    if (ctx.path == '/login') {
        // 登录？ 
        const { userName, password } = ctx.query;
        // console.log(userName, password, '---------');
        if (userName == 'test' && password == 'test') {
            ctx.session.login = {
                name: userName,
                uid: 2,
                sex: '男',
                level: 2
              }
            ctx.type = 'html'
            ctx.body = `
            登录成功
            <a href="/testlogin">去测试登录</a>
            `;
        }
    } else if (ctx.path == '/testlogin') {
        console.log(ctx.session, '/////');
        if (!ctx.session.login.name) {
            ctx.redirect('/');
        }
        else {
            ctx.body = '已经登录' + ctx.session.login.name;
        }
    }

    // 后端种了一个uid的cookie
    // Domain + path 是对cookie的一种限定   HttpOnly提高安全性 设置为false，通过document.cookie就可以获取cookie
    // ctx.cookies.set('uid','123456',{
    //     path: '/admin',
    //     maxAge: 1000 * 10 * 60,
    //     httpOnly: true,     // 默认为 true
    // })
    // 动态数据
    // 支持异步
    // 数据库的查询
    // await db.find()
    // ctx.body = `Hello World`;
});
// node main.js后   在loalhost：1314可以运行
app.listen(1314);
