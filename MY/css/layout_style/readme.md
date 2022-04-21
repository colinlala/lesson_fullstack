# 布局样式

## 多列布局

### Columns：column-width || column-count

- 实现类似报纸、杂志那种多列排版的布局，W3C特意给CSS3增加了一个多列布局模块（CSS Multi Column Layout Module）。它主要应用在文本的多列布局方面。  

    1. **column-width**:主要用来定义多列中每列的宽度。
    2. **column-count**:主要用来定义多列中的列数。


### column-width: auto | length

- 与width属性一样，只不过在定义元素列宽的时候，既可以单独使用，也可以和多列属性中其他属性配合使用。  

    1. **auto**或者不设置：则元素多列的列宽将由其他属性来决定
    2. **length**:只能是正值，不能为负值。


### column-count：auto | integer

- 给元素指定想要的列数和允许的最大列数






## 列间距column-gap: normal || length

- 设置列与列之间的间距
    1. **normal**:默认值，默值为1em（如果你的字号是px，其默认值为你的font-size值）
    2. **length**:此值用来设置列与列之间的距离，其可以使用px,em单位的任何整数值，但不能是负值。


## 列表边框column-rule：column-rule-width | column-rule-style | column-rule-color

- 列与列之间的边框宽度、边框样式和边框颜色。
    1. **column-rule-width**：列边框的宽度，默认值为“medium”，接受任意浮点数，但不接收负值。与border-width属性一样，可以使用关键词：medium、thick和thin。
    2. **column-rule-style**：列边框样式，默认值为“none”。与border-style属值相同，包括none、hidden、dotted、dashed、solid、double、groove、ridge、inset、outset。
    3. **column-rule-color**：列边框颜色，其默认值为前景色color的值，接受所有的颜色。不希望显示颜色，transparent(透明色)。


## 跨列设置column-span: none | all

- 定义一个分列元素中的子元素能跨列多少。需要基中一段内容或一个标题不进行分列，也就是横跨所有列，此时column-span就可以轻松实现。
    1. **none**：默认值，表示不跨越任何列。
    2. **all**：表示的是元素跨越所有列，并定位在列的Ｚ轴之上。


## 盒子模型

1. W3C标准盒模型：
    > 外盒尺寸计算（元素空间尺寸）  
    element空间高度(空间宽度)＝内容高度＋内距＋边框＋外距
    > 内盒尺寸计算（元素大小）  
    element高度(宽度)＝内容高度＋内距＋边框（height为内容高度,width为内容宽度）
    
2. IE传统下盒模型（IE6以下，不包含IE6版本或”QuirksMode下IE5.5+”）
    > 外盒尺寸计算（元素空间尺寸）
    element空间高度(宽间宽度)＝内容高度＋外距（height,width包含了元素内容宽度、边框、内距）
    > 内盒尺寸计算（元素大小）
    element高度(宽度)＝内容高度（height,width包含了元素内容宽度、边框、内距）

- ***box-sizing: content-box | border-box | inherit***
    1. **content-box**:默认值，element width/height = border + padding + content width / height。-------内容200px
    2. **border-box**:元素的宽度或高度=元素内容的宽度或高度。内容宽度或高度包含了元素的border、padding、内容的宽度或高度（此处的内容宽度或高度＝盒子的宽度或高度—边框—内距）。-------整体200px
    3. **inherit**:使元素继承父元素的盒模型模式



## 伸缩布局（Flexbox布局）

1. 创建一个flex容器
    ```
    .flexcontainer{ 
        display: -webkit-flex; 
        display: flex; 
    }
    ```
2. Flex项目显示
3. Flex项目列显示
    ```
    .flexcontainer{ 
        /* -webkit */
        display: flex; 
        /* -webkit */
        flex-direction: column; 
    }
    ```
4. Flex项目移动到顶部
    ```
    /*竖着顶*/
    .flexcontainer{ 
        /* -webkit */
        flex-direction: column; 
        justify-content: flex-start; 
    }
    
    /* 横着顶 */
    .flexcontainer{ 
        /* -webkit */
        display: flex; 
        flex-direction: row; 
        align-items: flex-start; 
    }
    ```

5. 水平垂直居中
    ```
    /* 横着 */
    .flexcontainer{ 
        /* -webkit */
        display: flex; 
        flex-direction: row;     
        align-items: center;     
        justify-content: center; 
    }
    
    /* 竖着 */
    .flexcontainer{ 
        /* -webkit */
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        justify-content: center; 
    }
    ```

6. Flex项目实现自动伸缩
     ```
    .bigitem{ 
        flex:200; 
    }  
    .smallitem{ 
         flex:100; 
    }
    ```

