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