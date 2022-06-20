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


- 城市选择功能
    1. city.json  城市数据  接口提供  缺点，每次要请求
        - 下一个版本 配置文件 项目的包有点大
    2. 接口都放在 api/request 方便管理
    3. link的to属性，复杂版本接受一个对象 {{pathname:'',search:''}}
        - react-router-dom useSearchParams.get('name')
        - localstoage也可以做到

- 子组件不做数据请求，由父组件统一并传过来
    子组件不做复杂状态，用props 传过来


- 幻灯片功能
    1. 使用了swiper
    2. 全局引用css
    3. 固定的html结构
        - .swiper-container > .swiper-wrapper > .swiper-slide(n个)
        - .swiper-pagination 分页
    4. 组件挂载后，useEffect  实例化幻灯片功能 new Swiper('.btn-banners')

- 仿站原则与做法
    1. 想去哪家公司就仿哪家 
    2. 首页面 一模一样
        - 但又不用完全实现
    3. 不重要的功能切页面
    4. 不要让动态部分撑页面的感觉
        - 给固定高度（rem，不要用px）
    5. styled-components  生成的类名有点乱？

- css in js 类名逻辑
    1. 多人协作时，类名可能会冲突
    2. 页面级别组件，npm第三方组件，一般组件，通用组件，样式组件...
        - 组件太多了 
    3. styled-components 生成hash类名
        - 样式又上去了，但绝对不重复
        - 最外层就好，内层会自动嵌套
    4. 在jsx里面直接写className="demo"是没有这个能力的
        - styled-components 等 css in js时，就可以

- 开发套路及最优方案
    1. 接口都放在api目录下
    2. 接口请求在路由级别组件发生，子组件不要去做
    3. 子组件只负责jsx 提供和styled-components css in js 
    4. font-awesome 图标真的好多 

- 延迟加载路由组件
    - **如何延迟组件**
    1. 引入文件，还会执行
    2. 只需要首页一个组件就好
        - 如果可以少加载一点，首页打开肯定就更快
    3. 但是router配置，配置所有的路由

- antd-mobile
    - antd 的移动版 ，手机栈
    1. NavBar 
    2. navigate(-1) 

- 单页应用tabbar 不显示功能开发及调试
    1. 有些二级页面，不需要tabbar
    2. 两种路径
        - 完全匹配
        - 部分匹配
            - 正则，lastIndexOf 动态路由，没有办法恒等
            - /^(\/[\w]+)\//
    3. bug过程
        - forEach 来做的，**但是他的每一项都有一个执行函数，函数类里面的return不会终止外部函数的运行**
        - bug半天，断点调试，反馈代码执行
    4. indexOf 
    5. 项目记录里面最好有断点调试说明

- 项目架构，必须utils
    - 工具函数，工具函数 lodash ？没有
    - 跨应用适用