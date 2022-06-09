1. 目录作用
    - arc 开发目录
    - assets 静态资源文件
        - 自定义字体文件
        - images 图片
    - styles 各种样式文件

- antd 阿里的UI框架   ant蚂蚁金服
    1. Spin 方便的去做loading...效果，spinning = loading状态，tip 文字提示，加载的内容包在里面

    2. Tabs + TabPane   key + activeKey + onChange 
        - Tabs 容器式组件  import { Tabs } from 'antd'
        - TabPane 子组件   const { TabPane } = Tabs

    3. List + List.Item
        - dataSource  数据源
        - renderItem  每一个jsx输出 ，不用写map的key
        - classNames

    4. Icon 小图标 ，type显示各种小图标

    5. Input 
        - onChange 数据绑定
        - onPressEnter  回车事件
        
    6. 数据流转  一定要和状态一致   useState 组件挂载 + upadte
        