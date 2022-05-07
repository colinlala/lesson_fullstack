# 电商界面开发

- html css js 位置 ，意义？
    1. html+css 完成静态页面的显示，越快越好
        css 放到head ，html+css允许 ， 并行 下载和执行
        - 下载html  DOM树
        - 下载css

        css 不会阻塞html 继续下载，css放到尽可能的上面 head
        html + css 排版好 ，可看的
            t = t1 + t2（html+css）
            t = Math.max(t1,t2)
    2. js放到尾部？
        js在下载的过程中,会阻塞html的下载，js下载并执行后，才会恢复html下载
        t = Math.max(t1,t2) + t3
        js 执行 后台
- ***defer***
    > 1. **异步**的下载该文件并且不会影响到后续DOM的渲染；  
    > 2. 如果有多个设置了defer的script标签存在，则会按照顺序执行所有的script；  
        js文件下载后执行 。  
    > 3. defer脚本会在文档渲染完毕(静态页面)后，DOMContentLoaded事件调用前执行。  DOMContentLoaded(html+css) 早于 load



- ***async***
    > 1. 使得script脚本异步的加载并在允许的情况下执行
    > 2. 并不会按着script在页面中的顺序来执行，而是***谁先加载完谁执行***。
    > 3. DOMContentLoaded之后运行
        - DOMContentLoaded事件的触发并不受async脚本加载的影响，在脚本加载完之前，就已经触发了DOMContentLoaded。


- js事件 分不同的时期等级
    1. DOM0 级事件   onload onclick  事件包含on
    2. DOM2 级事件   addEventListener('click',callback);




- 电商应用（页面开发）
    1. 界面能力良好，html标签+css排版
    2. 组件（页面开发的思维提升，工具）
        - css命名技巧
        - 用一堆的html+css组成一个界面，一个展示功能和能力的集合，复用
        - 框架提供组件，节省70%的工作
    3. 做项目
        - 调研 weui  移动端最nb的ui框架
        - 界面能力丰富 业务


- 引入weui框架（框架业务），加速且方便开发，组件开箱即用
- 打造项目可复用的组件，weui-mark
- 通用业务样式，特定项目，可能跨组件或样式功能的  
    .bg-green   
    .f_sm { font-size:12px; }  小号字体
    .fr { float:right; }     


- 图标字体库
    1. 每个项目都有的，引入图标
    2. 图标也是一种字体
        font-family；
    3. 在默认字体外，引入一个图标字体
        iconfont
            - @font-face 引入 字体资源
    4. .icon 元素的地方，使用这种字体
    5. 使用编码查找特定文字符号  
        .icon-109:before{
            content:'\e667';
        }


- 以文件打开product.html
    物理路径 file://。。。。。
- 以Open with Five Sever打开
    相对路径 -> web app 根路径 ,启动了http服务
        http://127.0.0.1:5555/html5/mall4.14-16/product.html


> 区别
> > 协议不一样
> > html、 css、 js、 等资源下载及显示。http协议是基于请求响应式的协议.
> > >  mysql:8080.web:80


- 组件化思维是良好编程的习惯