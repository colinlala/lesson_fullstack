# 手写代码

- instsanceof 运输符，用于判断构造函数的protype属性是否出现在对象的原型链中的任何位置

- Object.getPrototypeOf(obj);    返回对象的原型对象


- web编程的基础是http 基于请求响应式简单协议
    1. lazyload.html    http请求    ，响应  html文件
    2. htmnl渲染的过程 html DOM + css OM 静态页面
    3. img 引入图片资源的，启动http请求资源，图片响应后，显示在页面上。
        页面网络请求数比较多，且大


- 如何优化多图片造成的网络请求堵塞
    1. 请求数是页面打开速度性能的重要指标
        link标签、img标签、audio标签、script标签
    2. ，启动network下载 +1
    3. http协议  请求-响应  马路，并发限制



- 延迟加载 
    1. img  src  不改变
        - 显示一个占位图片，原来的src -> data-src 不需要并发n张图片，只需要下载一张占位图片。浏览器对已经下载的资源会缓存。
    2. onscroll 图片 位于可视区，img.getBoundingClientRect()img.getBoundingClientRect().top < window.innerHeight即可。