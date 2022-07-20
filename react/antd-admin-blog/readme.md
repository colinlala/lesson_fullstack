- react 单页应用 + 数据管理 全家桶开发
- 商城 网易云音乐 用户端App
    - 博客后台
- 权限校验 Blog Admin 后台管理系统 
    1. login 管理员Admin  小编  一般工作人员
    2. antd 很快  国际化流行的专业框架 后台管理系统
    3. 新手？ 工作人员用的，用户量不大，并发，性能优化，好用方便。出错没有那么严重
    4. 


- vite 升级到 3 了
- antd v4
- canvas 背景墙  数据可视化  
- 细节化处理 redux 性能
    - 开发阶段和生产阶段 需求是不一样的
    - 开发阶段 开发遍历 代码开方便调试，有注释，不要压缩 sourcemap
    - 环境变量的概念    cross-env 跨操作系统 NODE_ENV === 'development' 工程化  process.env.NODE_ENV

- 登录
    1. 表单 提交 useState username  password 格式正确
    2. dispatch 异步的action
    3. api  
    4. reducer case 重新计算
    5. state.login true

- canvas 绘图功能

    1. html5 提供的绘图
        - 游戏
        - 数据可视化
    2. dicument.createElement('canvas')
    3. width height window.innerWidth|innerHeight
    4. 绘图的api ctx = canvas.getContext('2d')
    5. ctx.fillStyle
        - ctx.beginPath
        - ctx.closePath
        - ctx.fillRect
        - ctx.fill
    6. window.requestAnimationFrame(drawFrame)动画