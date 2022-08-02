- 大前端项目
    - bilibili-api 提供数据接口服务
        - koa  后端框架
            - 中间件为特色的开发思路
        - index.js  单点入口
            - http 服务
            - 路由、跨域、数据库连接、session服务（只在服务器端）等中间件
                - koa-cors
            - 注意，保持简洁
                - 路由不让在index.js 写太多

- 路由模块化如何做？
    1. 添加一个routers 目录
    2. 每个路由模块都有独立的文件
    3. Router.get  返回 router.routes()
    4. index.js 根路由 router.use('/search', searchRouter)
    5. app.use(router.routes())

- fastmock -> routes + data 

- 前端 react 全家桶 + ts
    1. 准备
        - css reset   iconfont   rem.js 
            - style-components  createGlobalStyle  IconStyle
            - rem.ts 模块化
    2. vite.config.js + tsconfig.json   alias
    3. rem 任然使用 rem 作为适配方案
        - 设计师给的设计稿 750px ，
        - vw 作为适配方案 750px = 100vw   10vw = 1rem = 75px
        - px2rem 手动封装,  css 超集 styled-components stylus/sass, 不用每次去算，看设计稿
    4. logo 等图片用的不是png，jpeg。。。  像素图片，放大到一定就会模糊
        - svg 图片格式，矢量图（数学图形），html写出来的，logo在各个设备的尺寸不一样
        - 无限拉伸

- ts  api
    1. axios 作为请求后端的库
    2. 配置 baseURL + 拦截
        - config.ts
    3. 所有的请求列出来

- loading ? setLoading()?
    1. data 请求完后去，
    2. 菜单，幻灯片，视频列表...
    3. loading...
    - Promise.all[asyncActions]   setLoading(false)

- 后端路由高级能力
    1. 后端模块
        - 以暴露资源， 以http的协议向全网提供资源，Restful  url + method 方式
        - 模块化提供资源，排行榜模块 /ranking/1 ...
            1. 路由模块 routes/ranking 模块先锋；
            2. 模板模块  views/ranking；
            3. 控制器模块 controller/ranking；
            4. 模型模块 models/ranking

    2. url 参数  两类
        - path  部分 /ranking/:id  动态路由 params
            - /posts/:pid/comments/:cid   某文章的某评论
        - koa  ctx.params { pid:  , cid: }

    3. 后端路由中间件函数，只负责接受校验参数，响应数据
        - 如何准备url，如何取数据。。。分给其他层做
        - MVC ， M database ， V api 返回的是json 不需要html显示
            - index.js 入口文件 -> 路由 /ranking/:id -> api |controllers -> 路由 /ranking/:id  -> index.js 入口文件 -> react

- redux里面，进入新的状态，不希望也不应该改变或者引用旧状态，甚至因为redux一套严格的状态管理设计模式，**我们希望状态对象是不可改变**，只能生成新的对象。
    1. Object.assign
    2. { ... }
    3. ImmutableJS
    - Object.freeze()

- utils 封装函数的 ts 写法
    - 封装，复用，易读，抽象
    - 注释
    - 参数  返回值  ts类型化

- 首页的videos  列表 react + redux + ts
    - 封装 video-item 组件 
        - ts  propTypes， 图片懒加载
    - video   在 models声明

- video 列表  403 Forbidden?  权限，安全问题，不属于我的资源，省掉一些流量
    ```js
        <meta name="referrer" content="no-referrer" />
        <!-- 隐藏主机名，以便请求资源 -->
    ```
    1. 这个图片资源属于 *B站的服务器*，专门的图片服务器，
    2. 4xx 用户错误，5xx 服务器错误
    3. 前端图片访问403 借助node解决
        1. /transfer/image 中转一下
        2. 协议层  后端拿到 ?pic=...   
        3. node-fetch (request库) 请求 await一下 （koa 支持async） 下载完拿到response
        4. response 转成 buffer 格式，图片在传输的时候都是二进制流，node  buffer 对应
        5. 远程图片旧来到了本地服务器
        6. 前端访问的就是自己的服务器，不存在 forbidden 问题
        7. `ctx.set('Content-Type', 'images/jpeg')`  响应头加上Content-Type  images/jpeg格式的

