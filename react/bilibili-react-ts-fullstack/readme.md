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
            1. 后端解决方案：
 


- **端口不一样，进程不一样**