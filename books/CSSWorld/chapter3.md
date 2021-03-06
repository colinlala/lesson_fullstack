<<<<<<< HEAD
# 流、元素与基本尺寸

- “块级元素”和“内联元素”

## 块级元素

- “块级元素”具有换行特性，可以配合 clear 属性来清除浮动带来的影响。
- display并不会使用 list-item（主要原因：***兼容性不好***。）
- 按照 display 的属性值不同，
    1. 值为 block 的元素的盒子实际由**外在“块级盒子”**和**内在的“块级容器盒子”**组成，
    2. 值为 inline-block 的元素则由**外在的“内联盒子”**和**内在的“块级容器盒子”**组成，
    3. 值为 inline 的元素则**内外均是“内联盒子”**。
- display:inline-table，外面是“内联盒子”，里面是“table 盒子”。得到的就是一个可以和文字在一行中显示的表格。
- width/height 作用在是内在盒子（“容器盒子”）上。


## width/height 作用的具体细节

### 深藏不露的 width:auto

四种不同的宽度表现：
1. 充分利用可用空间，
2. 收缩与包裹，
3. 收缩到最小，
4. 超出容器限制，

- \<div>默认宽度 100%显示，是“外部尺寸”，其余全部是“内部尺寸”。

#### 外部尺寸与流体特性

1. 正常流宽度  
    - ***“无宽度，无图片，无浮动”***。“无宽度”?表现为“外部尺寸”的块级元素一旦设置了宽度，流动性就丢失了。
    > 借助流动性无宽度布局，那么就算外面容器尺寸变化，导航也可以自适应，这就是充分利用浏览器原生流特性的好处。
2. 格式化宽度  
    - 仅出现在“绝对定位模型”中(absolute 或 fixed)。
        > 默认情况下，绝对定位元素的宽度表现是“**包裹性**”，宽度由内部尺寸决定。

#### 内部尺寸与流体特性

1. 包裹性-“自适应性”
    - 元素尺寸由内部元素决定，但永远小于“包含块”容器的尺寸
2. 首选最小宽度
    - 元素最适合的最小宽度。
        1. 东亚文字（如中文）最小宽度为每个汉字的宽度，14。
        2. 西方文字最小宽度由特定的连续的英文字符单元决定。终止于空格（普通空格）、短横线、问号以及其他非英文字符等。
        3. 类似图片这样的替换元素的最小宽度就是该元素内容本身的宽度。

3. 最大宽度
    - 元素可以有的最大宽度。
        > 如果内部没有块级元素或者块级元素没有设定宽度值，则“最大宽度”实际上是最大的***连续内联盒子***的宽度。


### width 值作用的细节

- \<div>元素默认的 padding、border 和 margin 都是 0
1. 流动性丢失
    - 对于块状元素，如果 width:auto，则元素会如水流般充满整个容器,而一旦设定了 width具体数值，则元素的流动性就会被阻断。

2. 与现实世界表现不一致的困扰
    - 为 CSS 2.1 是面向内容（图文信息）设计的，所以，***width 设计成了直接作用在content box 上***。


### CSS 流体布局下的宽度分离原则

- CSS 中的 width 属性不与影响宽度的 padding/border（有时候包括 margin）属性共存。
    > 分离，width 独立占用一层标签，而padding、border、margin 利用流动性在内部自适应呈现。  

        ```
        .father { 
            width: 180px; 
        } 
        .son { 
            margin: 0 20px; 
            padding: 20px; 
            border: 1px solid; 
        }
        ```


### 改变 width/height 作用细节的 box-sizing

- 也就是说，box-sizing 属性的作用是改变 width 的作用细节。
    - box-sizing 的作用就是可以把 width 作用的盒子变成其他几个
        1. content-box(默认值)
        2. padding-box(Firefox曾经支持)
        3. border-box(全线支持) 
        4. margin-box(从未支持)


### 相对简单而单纯的 height:auto

- CSS 的默认流是水平方向的，宽度是稀缺的，高度是无限的。因此，宽度的分配规则就比较复杂，高度就显得比较随意。


### 关于 height:100%

- 父级没有具体高度值的时候，height:100%会无效

## CSS min-width/max-width 和 min-height/max-height 二三事

1. 为流体而生的 min-width/max-width

    - 出现在**自适应布局**或者**流体布局**中。无须 width 设置，直接使用。
        > max-width 生效的时候，**height:auto 是必需的**，不然图片会水平压缩。但是加载时图片占据高度会从 0 变成计算高度，图文会有明显的瀑布式下落。

2. 与众不同的初始值

    - max-*系列的初始值为**none**。
    - min-*系列的初始值为**auto**。

3. 超越!important，超越最大

    - **超越!important**：`max-width`会覆盖`width`（style、!important都没有用）。
    - **超越最大**：`min-width`覆盖`max-width`(同时设置时)

4. 任意高度元素的展开收起动画技术

    - 展开收起效果（是控制`display`属性值在`none`和其他值之间切换）

    - `max-height`使用足够安全的最小值

## 内联元素

- 块级负责**结构**，内联负责**内容**。

1. “内联元素”的典型特征就是可以和文字在一行显示（文字，按钮，图片，各种框，表单控件）。

2. 内联世界深入的基础—**内联盒模型**

    - 内容区域，指一种围绕文字看不见的盒子（没有明确的定义，理解为 em 盒，em-box，可看成是中文字符占据的 1 em 高度区域）

    - 内联盒子，不会让内容成块，而是成行显示。一个个内联盒子组成**行框盒子**，一个个行框盒子组成**包含盒子（包含块）**。

3. 幽灵空白节点

    - 每个行框盒子的前面有一个“空白节点”。

=======
# 流、元素与基本尺寸

- “块级元素”和“内联元素”

## 块级元素

- “块级元素”具有换行特性，可以配合 clear 属性来清除浮动带来的影响。
- display并不会使用 list-item（主要原因：***兼容性不好***。）
- 按照 display 的属性值不同，
    1. 值为 block 的元素的盒子实际由**外在“块级盒子”**和**内在的“块级容器盒子”**组成，
    2. 值为 inline-block 的元素则由**外在的“内联盒子”**和**内在的“块级容器盒子”**组成，
    3. 值为 inline 的元素则**内外均是“内联盒子”**。
- display:inline-table，外面是“内联盒子”，里面是“table 盒子”。得到的就是一个可以和文字在一行中显示的表格。
- width/height 作用在是内在盒子（“容器盒子”）上。


## width/height 作用的具体细节

### 深藏不露的 width:auto

四种不同的宽度表现：
1. 充分利用可用空间，
2. 收缩与包裹，
3. 收缩到最小，
4. 超出容器限制，

- \<div>默认宽度 100%显示，是“外部尺寸”，其余全部是“内部尺寸”。

#### 外部尺寸与流体特性

1. 正常流宽度  
    - ***“无宽度，无图片，无浮动”***。“无宽度”?表现为“外部尺寸”的块级元素一旦设置了宽度，流动性就丢失了。
    > 借助流动性无宽度布局，那么就算外面容器尺寸变化，导航也可以自适应，这就是充分利用浏览器原生流特性的好处。
2. 格式化宽度  
    - 仅出现在“绝对定位模型”中(absolute 或 fixed)。
        > 默认情况下，绝对定位元素的宽度表现是“**包裹性**”，宽度由内部尺寸决定。

#### 内部尺寸与流体特性

1. 包裹性-“自适应性”
    - 元素尺寸由内部元素决定，但永远小于“包含块”容器的尺寸
2. 首选最小宽度
    - 元素最适合的最小宽度。
        1. 东亚文字（如中文）最小宽度为每个汉字的宽度，14。
        2. 西方文字最小宽度由特定的连续的英文字符单元决定。终止于空格（普通空格）、短横线、问号以及其他非英文字符等。
        3. 类似图片这样的替换元素的最小宽度就是该元素内容本身的宽度。

3. 最大宽度
    - 元素可以有的最大宽度。
        > 如果内部没有块级元素或者块级元素没有设定宽度值，则“最大宽度”实际上是最大的***连续内联盒子***的宽度。


### width 值作用的细节

- \<div>元素默认的 padding、border 和 margin 都是 0
1. 流动性丢失
    - 对于块状元素，如果 width:auto，则元素会如水流般充满整个容器,而一旦设定了 width具体数值，则元素的流动性就会被阻断。

2. 与现实世界表现不一致的困扰
    - 为 CSS 2.1 是面向内容（图文信息）设计的，所以，***width 设计成了直接作用在content box 上***。


### CSS 流体布局下的宽度分离原则

- CSS 中的 width 属性不与影响宽度的 padding/border（有时候包括 margin）属性共存。
    > 分离，width 独立占用一层标签，而padding、border、margin 利用流动性在内部自适应呈现。  

        ```
        .father { 
            width: 180px; 
        } 
        .son { 
            margin: 0 20px; 
            padding: 20px; 
            border: 1px solid; 
        }
        ```


### 改变 width/height 作用细节的 box-sizing

- 也就是说，box-sizing 属性的作用是改变 width 的作用细节。
    - box-sizing 的作用就是可以把 width 作用的盒子变成其他几个
        1. content-box(默认值)
        2. padding-box(Firefox曾经支持)
        3. border-box(全线支持) 
        4. margin-box(从未支持)


### 相对简单而单纯的 height:auto

- CSS 的默认流是水平方向的，宽度是稀缺的，高度是无限的。因此，宽度的分配规则就比较复杂，高度就显得比较随意。


### 关于 height:100%

- 父级没有具体高度值的时候，height:100%会无效

## CSS min-width/max-width 和 min-height/max-height 二三事

1. 为流体而生的 min-width/max-width

    - 出现在**自适应布局**或者**流体布局**中。无须 width 设置，直接使用。
        > max-width 生效的时候，**height:auto 是必需的**，不然图片会水平压缩。但是加载时图片占据高度会从 0 变成计算高度，图文会有明显的瀑布式下落。

2. 与众不同的初始值

    - max-*系列的初始值为**none**。
    - min-*系列的初始值为**auto**。

3. 超越!important，超越最大

    - **超越!important**：`max-width`会覆盖`width`（style、!important都没有用）。
    - **超越最大**：`min-width`覆盖`max-width`(同时设置时)

4. 任意高度元素的展开收起动画技术

    - 展开收起效果（是控制`display`属性值在`none`和其他值之间切换）

    - `max-height`使用足够安全的最小值

## 内联元素

- 块级负责**结构**，内联负责**内容**。

1. “内联元素”的典型特征就是可以和文字在一行显示（文字，按钮，图片，各种框，表单控件）。

2. 内联世界深入的基础—**内联盒模型**

    - 内容区域，指一种围绕文字看不见的盒子（没有明确的定义，理解为 em 盒，em-box，可看成是中文字符占据的 1 em 高度区域）

    - 内联盒子，不会让内容成块，而是成行显示。一个个内联盒子组成**行框盒子**，一个个行框盒子组成**包含盒子（包含块）**。

3. 幽灵空白节点

    - 每个行框盒子的前面有一个“空白节点”。

>>>>>>> 3060b42 (第一次Git提交所有文件)
