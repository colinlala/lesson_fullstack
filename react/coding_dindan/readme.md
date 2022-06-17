- react 项目初始化之优化
    1. git版本控制系统也是工程化的一部分
    2. 开源思维 找 + 供
    3. 加速


- 页面layout
    App 组件
    1. 页面级别组件共享局部方案
        header + 动态路由组件（Routes + Route path） + footer


- header 组件版本化及配置
    1. 页面中layout 固定部分，不属于页面组件的内部，属于layout
    2. BOM location.pathname 第一个版本
    


- 图标字体库
    1. font-awesmoe 方便，但是没有定制性
    2. iconfont 网站去找相应的
    3. 先快实现，后慢优化

- tabbar 底栏组件
    1. 属于App 不属于任何一个页面组件
    2. Link location active （classnames）
        - 字体变色
    3. flex：1 + 内部flex-direction:column
        - 弹性布局

- 切页面之前 移动端先自适应页面
    - html fonsize 动态计算
    - 不要用px，用rem