#  高仿哔哩哔哩

- 全新的项目
    1. 仿，大厂的新项目  掘金搜不到的 
    2. react 全家桶（hooks + router + redux） + ts + node 
        - 大前端：react 前端 + node 后端     
        - 全端工程师 react PC | Mobile + react Native（Native）| Android | IOS   用户体验 

- npm init vite
    - 创建了 react + ts bilibili 移动端单页应用
        - 用户的浏览器
    - bilibili-api 后端 用node写
        - 服务器
        - /url  接口 数据的对接

- ts 前端 
    1. vite  react-ts 模板来创建
    2. 强制类型声明 
        - @stypes/react  react类型声明文件    `React.FC<PropTypes>`   
        - UI Component 组件位置声明 对props interface 约定
        - ts + api  `:Promise<MemberEntity[]>`
            ```ts
                getMembers:Promise<MemberEntity[]>(){
                    const p = new Promise();
                    return p
                }
            ```
        - ts  redux 
        - ts  vites 配置

- api 服务   js来写

- alias 配置在ts里面对tsx组件不支持
    - 功能没有问题，ts错误提示 ， **在tsconfig.json 的 compilerOptions 添加**，path告诉ts添加预编译的路径
        ```ts
        "baseUrl": ".",
        "paths": {
            "@/*":["src/*"]
        }
        ```
- @types/node  @types/react  像
    - 有node 里相关的类型声明可以用，process:Process 进程
    - @types/   就是ts 类型声明需要的 interface type

- 全栈 项目中  数据从服务器端 到 页面显示 经过那些地方？
    - audios 
    1. 后端给我们一个数据接口 /api 某个返回promise 的函数
        - url/audios GET 方法请求 返回json数组
    2. bilibili-api 跟前端的api对接的
        - 怎么满足？http 服务  （协议前提）
            - `localhost` domain   （ping的过程 -> dns解析ip）
            - https://localhost:3300/ 
    3. /audios GET [{}]
        - react-router 负责的
        - koa-router
        - /audios 路径，前端后端都能设置吗？
            - 前端路由？前端可以，audios 路由级别页面  单页应用
                - 用户体验  近8年来发明的，react-router
            - 后端也可以  backend 
                - /path  method   http1.1
                - html5  history.pushState  不会更改url更新页面  hashChange #  `history.pushState(null, null, '#/' + url)`
        - /videos 设置为react-router  `<Route path="/videos",element={<Videos/>}>`
        - 后端路由/getVideos  get  ctx.body = 返回数据
    - 后端传统路由中间件服务的流程
        1. 先引入require('koa-router)()   返回一个router对象
        2.  router对象 get | post (url, 中间件函数)，来添加一个路由中间件，ctx上下文环境
        3. app.use 挂载一下才能生效
    - 中间件
        1. 位于  req   res中间的多个服务
        2. 中间件就是一个函数
        3. compose 成为一个数组
        4。 有顺序的  
        5. 请求响应过程中，所有的中间件会按顺序提供服务
            - 也可以提前退出中间件服务，也会出现服务跳过的情况

- 前端的api  ts注意那些地方？
    1. 要请求的数据，严格要求，那么ts  models/ 架构文件，对数据进行建模  interface 表 
    2. 接口函数
        - 函数的返回值 `（resolve，reject）:Promise<Video[]> => {} `
        - ` new Promise<Video[]> ` 显示指定未来的结果 unkown => unkown 是ts的类型


- 在App.tsx 生命周期中通过api ，从localhost:3000 向  localhost:3000/getVideos
    - 请求失败？原因是什么？  跨域问题，前端在3000  后端在3300 url里面。 http://www.baidu.com:3000/a?b=1  到 https://www.baidu.com:3000/a?b=1 也算跨域、 https://www.baidu.com:3300/a?b=1  也算跨域...
    - 跨域有安全问题，按这些规则来
        1. cors 
            1. 后端解决方案


- **端口不一样，进程不一样**

- js 浏览器有个 同源机制


- 搜索API
    1. 通过chrome 找到了b站的API地址，拿到了结果
    2. 不放到fastmock
    3. 自己的bilibili-api提供
        - `  router.get('/search/suggest',async(ctx,next)=>{})  `
        - ctx.query.w   查询字符串拿出来，koa  qs查询字符串变成了对象，encodeURI
        - try catch  确保后端容错处理
            - js 单线程，出错了，web程序就挂了，无法提供访问
            - try { 可能会出错的代码 } catch(e) {...}
    4. node-fetch 是 node 的 fetch ，原因是node对js最新功能的支持，没有那么快。可以用于node发送fetch请求，和es6的fetch一样
    5. node 去向B站发送远程接口请求的时候，B站是接受这次跨域请求的
        - 路由 + 假数据  代替fastmock ，自建web后端服务，为前端提供api
        - 如果像B站一样，跨域请求API
            1. chrome network  xhr  查看请求，拿到url、method、query...
            2. node 在api里面  封装这次请求
                - 把url的domian/path作为常量
                - 把query用数组装成[key=value]
                - 最后 = url + array.join('&')
                - then 
                - try {  } catch ()

- api 服务准备res响应数据
    ```js
        let resData = {
            code: "1",   // 1 成功
            msg: "success"  // 成功  |  失败原因
        }
    ```
    - B站code为0表示成功
    - data.result 写入resData

- api 服务的使命
    1. http 服务
    2. router method  url 响应
    3. try catch 容错
    4. 准备好json 数据 响应 res.body

- typescript
    - component
    - api
    - store

- reducer + typescript 怎么做？
    1. 架构调整了  combineReducers + n 个 reducer 函数 写在一个文件里
    2. npm i @types/redux --save-dev  开发阶段
        - build把 ts 代码打包成 --> js 代码
    3. AnyAction 类型  action: AnyAction
    4. actions 中 添加AnyAction  一定有type 字段
    5. 在异步action 里，约定 dispatch:Dispatch<AnyAction>
        - 一定会调用一个同步的action AnyAction
    6. redux 需要的最基础ts 搞定

- redux  typescript 使用
    - store 数据流管理发store 单例（设计模式Singleton createStore？new Store）（由combineReducers 返回的单一状态树）
        1. windeow as any 断言，跳过ts编译阶段的检测，只有运行在浏览器才有window对象。（语法编译）
        2. ts 通过vite  js后 工程化
        3. 在浏览器运行  js  瞬间的编译阶段   变量提升   window
        4. 运行
    - thunks as ThunkMiddleware 断言
    - 提供 state   rootState 自定义类型 `ReturnType<typeof reducers>`

- bilibili 首页tab 功能
    - antd mobile
    - 数据流角度
        
- api 数据怎么提供   后端能力
    1. 抖音等没有移动网页的应用？抓包，代理工具？fiddler
    2. 缓存  304 Not Modified
    3. 单点入口 
        - http服务的启动
        - 中间件服务（路由）的挂载
        - 模块化放到其他的地方，简单，简洁
        - MVC  model模型层（数据库的封装） view（html模板）controllers 控制器（校验参数）
    4. 构建数据的模型能力            B站 首页多级菜单
        - 树状结构
        - 0  第一级菜单
            - 每个菜单项 `{ tid: 1, typename: "动画" }`
            - tid 唯一   typename 标题
        - tid 1 父级菜单
            - 1 ： [ { tid: 33, typename: "MAD·AMV" }, ... ]
        - class 声明  模块化，ts要求比较严格    export {}
            - children：PartitionTypes[]

- model层  ts 写法
    1. model  归属  ts   比较难
    2. type interface class  关键字，都可以声明类型
    3. 每个架构级别页面目录下，添加一个index.ts 文件，方便引入

- partitionTypes 从后端到前端  完整的数据流
    1. 源头       GET  /partitions 获取api服务数据
    2. 前端   api/getPartitionsRequest 接口
    3. redux   异步action 结合models校验 ，dispatch同步action，redux重新计算
    4. connect  mapStateToPropos  state:rootState
    5. 组件  props 结构