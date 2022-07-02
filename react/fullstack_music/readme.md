- fullstack 全栈

  1. 前端方向 vitejs/app 工程化生成单页应用
  2. 后端使用 开源的 Neteasecloud
     - 先删除 .git 文件（一山不容二虎）
  3. 前端和后端怎么交流？
     axios api ->
     8080 frontend UI 组件 需要数据（fastmock 假数据）
     3000 backend api 接口
     前后端分离

  4.npm install -g cnpm -registry=https://registry.npm.taobao.org

      - 全局安装淘宝镜像 cnpm
      - npm i 国外的服务器上去把 package.json 中依赖的包下载下来，很慢，容易出错
      - cnpm i 到阿里云上下载，更快
      - --registry 手动设置安装源

- react 全家桶

  - react 组件化，MVVM 响应式
  - react-router 路由
  - redux 数据流管理
    - 前端 -> api -> redux（中央银行） -> 后端

- react 是声明式的 UI 组件开发框架

  1.  那么多的组件 ， 好复杂，好多 API
  2.  可以用组件来声明功能，更好读

- react + reactDOM
  - react-router + react-router-dom
  - redux + react-redux

- 数据仓库搭建过程
   1. 从 react-redux 中解构Provider，声明给应用添加数据管理功能
   2. store 专有目录下redux中的 createStore 创建仓库实例
   3. createStore方法接受reducer汉纳树

1. reset
  - 使用styled-components 提供的 createGlobalStyle 全局样式
  - styled.div`` wrapper容器 hash化 
2. adapter

3. axois 功能点
  - 网络请求很多，api axios单例模式
  - 统一了vue react native app三端的请求库
  - 每个请求 域名 + 端口 没必要重复， 可以配置到baseURL中
  - 为了切换请求域名的需要   http://localhost:3000/banner
  - **响应拦截器**  interceptors.response.use()    （接收到数据的时候，进行数据过滤、对状态码判断，进行对应的操作）
    - 结构好 res.data   处理错误
  - **请求拦截器**  interceptors.request.use()    （发送请求的时候，携带一些信息）
  - 登陆时，服务器会给我们授权码 token ，每次请求时，需要手工带上
    - 拦截器 request     req.headers 请求头  Authorization 授权

- 组件数据管理功能被剥夺
  1. redux 管理数据更专业
    - store  store/index.js  
    - reducer 集合 交给store
    - combineReducers 提供 reducer
    - 各个模块 每个模块都是一个reducer函数
    - reducer 还可以多次运行，dispatch  一个想要的action
    - 页面会自动更新
    - connect mapStateToProps 获取状态，mapDispatchToProps 来触发状态的改变
  2. mapStateToProps 状态读操作
  3. mapDispatchToProps 写操作
    - 状态不可直接修改  redux 起因
    - 有法可依   dispatch({type:'',data: })   在action里
    - reducer 根据 type 重新计算 ，状态发生改变，应用在有状态的地方 MVVM


- 小型项目没必要用redux，如果足够复杂，模块化reducer迁移到pages相应模块下
  - pages/store  新的目录结构
  - store 中央  src/store + 模块化  @pages/store{n}

- 修改状态有固有流程
  - 属于actionCreators
  - 一般标配两个action，一个同步的，一个异步的
  - dispatch 才能触发
  - action 对象固定格式 {type: }
  - type 方便我们把action为什么要改变记录下来
  - 从init到任何action 状态，都是可被追溯的
  - 数据管理的严谨性

- style-components 
  - 页面播放歌曲动态高度，props传参   ${函数} 函数的返回值  页面的播放状态
- 移动端一般，必须better-scroll 生成的scroll组件
  1. 滚动体验更好
  2. 下拉刷新，上拉加载更多
  3. 使用神三元封装的scroll组件
  4. 移动端加载更多的标配

- 数据管理跨页面级别的组件
  - redux 可以用来共享数据，本质。父子组件共享（好搞），爷孙共享（难搞）
  - redux connect 一下，redux 可以跨页面级别，跨层级

- redux架构思路
  1. 数据管理和组件，在有了redux后，是平级关系
    - /pages    /store
  2. 模块化数据管理， 每个模块reducer + action 下放到页面路由模块中
  3. 每个模块都提供index.js(灵魂)，所有的reducer，action，constants都一起export，清单文件

- react 组件渲染原理
  1. 挂载
  2. 当状态更新时，就MVVM，jsx从头到尾重新编译
  3. recommend中，多个重要子组件Slider等
  4. 给相对独立，组件加memo，只要外界给他的props没有变，则不会重新编译
  5. 热更新  页面局部

- memo 组件性能优化
  1. 子组件
  2. 父组件数据复杂，多项改变状态的地方
  3. 父组件的改变，没有影响到子组件（props未变，没有props）
  4. 组件外面都加memo

- styled-components 原则
  1. 最外层容器 使用styled-components 接管
    - Wrapper  Container
  2. List + ListItem 样式的复用


- 图片延迟加载
  1. react-lazyload 声明式组件  LazyLoad + placeholder 包住原来的图片
  2. Scroll onScroll react-lazyload 去 forceCheck