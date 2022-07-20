// node api -> 框架层
// react 单页应用 MVVM 模式的项目  Model View ViewModel
// 后端 模式？ MVC Model（数据模型，model）  View（html） Controller
// Model View 不能直接通信    要通过Controller来管理（业务）
const Koa = require("koa"); // 最好用的node 后端框架，遵守mvc开发范式
const app = new Koa(); // 意思是把 web server 理解为 server app
// use 启用一个中间件  函数
// app.use 就好像 redux compose
// ctx context 
app.use(async ctx => {
    // 支持异步
    // 数据库的查询  
    // await db.find()
    ctx.body = `Hello World`;
});
// node main.js后   在loalhost：1314可以运行
app.listen(1314);

