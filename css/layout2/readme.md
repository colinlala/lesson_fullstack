- js 一切皆对象，css中一切皆盒子
    - 视觉格式化模型  Visual Formating Model  VFM
        - 显示文档时，使用的计算规则（你看到的是怎么算出来的）
            1. 哪些规则？ box是怎么样以看到的方式显示在document上？
                盒子模型尺寸（box-sizing:border-box）+ 定位（position:absolute,float）+ 盒子类型 + 兄弟元素（float）+ 其他因素



- 盒子类型由什么决定？  display
    - 两种显示类型
        1. outer display type  对外显示，决定了该元素本身是如何布局的
            即参与何种格式上下文
            bock-level-box
                block、list-item、table、flex、grid、
            inline-level-box
                inline、inline-block、inline-table、inline-flex、inline-grid


        2. inner display type  盒子看成容器，规定子元素是如何布局的，格式化能力
            1. BFC，块级格式化上下文
            2. IFC，行级格式化上下文
            3. GFC，栅格格式化上下文
            4. FFC，弹性格式化上下文
            
- block inline inline-block
    - Block 
        1. 占满一行，默认继承父元素的宽度，多个块元素将从上到下进行排列
        2. 设置宽高
        3. 设置 padding 和 margin 

    - inline
        1. 不会占一行，宽度随由内容而变化，多inline，从左到右的顺序排列显示。如果一行放不下，则自动换行。
        2. 不能设置宽高
        3. 设置 margin-top 、padding-top 不生效

    - inline-block
        1. 不会占一行，宽度随由内容而变化
        2. 设置宽高
        3. 设置 padding 和 margin 


- 格式化上下文 Formatting Context
    - 页面中的一块渲染区域，规定了渲染区域内部的子元素是如何排版和相互作用的
    - 不同类型的盒子有不同格式化上下文
        1. BFC，块级格式化上下文
        2. IFC，行级格式化上下文
        3. GFC，栅格格式化上下文
        4. FFC，弹性格式化上下文

- BFC，
            