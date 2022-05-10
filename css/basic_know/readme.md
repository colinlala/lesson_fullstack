# CSS 底层
    CSS StyleSheet,   rules 、key:value


- 继承 inhert   （解决一些问题引入的机制）
    font-size   color 减少很多操作
    - css并不是所有属性都有继承能力。
        属性，单纯的减少工作量，直接继承，不会有副作用。
        1. 可继承：
            - 字体相关：font-size、font-family、font-weight、font-style、-webkit-font-smoothing、font-size-adjust
            - 文本相关：color、text-align、text-decoration、text-indenet、text-shadow、letter-spacing、word-spacing、white-space、line-height
            - 列表相关：list-style、list-style-image、list-style-type、list-style-pisition
            - 其它属性：visibility、opacity、cursor

        2. 不可继承：（布局相关）
            - 定位、display、



- 文档流概念
    文档（html 文档document）+流(水)，像水一样可以自适应所在的容器
        块级   行排列
            默认占满整行，多个块级盒子，从上到下排列
        行内（内联） 列排列
            当一行放不下的时候，会自动切换到下一行。whit-space:nowrap。行内元素有点弱，需要新的规则。
        文档流 + 盒模型 + 布局 + ...  页面渲染原则


- 脱离文档流
    position（absolute  fixed） + float（左  右）    display:none;

    指：节点脱离正常文档流后，在文档流中的其它节点忽略该节点并填补原先空间。


- margin 重叠问题
    两个块级相邻元素，margin重叠，原则是？
    1. 两个块级元素，处于同一个BFC上下文环境中
    2. 块级盒子在垂直方向上，一个个的放置（BFC）
    3. 如果属于同一个BFC的两个相邻盒子的margin会发生重叠


    - 根元素 html body 最大的创建BFC的元素


    如何创建BFC
        1. 根元素  html/body  最大的
        2. 非溢出的可见元素  overflow 不为visible
        3. 设置float   浮动布局
        4. 设置定位  BFC position absolute fixed，不是relative
        5. display:inline-block | table-cell | flex | table-caption | grid  不是block、nono、inline



- 页面展示计算规则 = 文档流 + 盒子模型 + BFC + 布局 