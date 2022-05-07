<<<<<<< HEAD
<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 15:24:36
 * @LastEditTime: 2022-04-26 16:45:49
 * @Description: 
 * 
-->
# es6 新的数据类型
    大数据 数值表示范围

js 简单数据类型
    String  boolen  number  undefined  null   bigint


- 大数据时代 ，es6 推出了新的简单数据类型  Bigint
- 适合大数相加，准确，不适合/,舍去小数
- 两种新建方式 1n BigInt("1")
- typeof bigint
- 不支持 隐式类型转换(+)   强制类型转换  BigInt()
- number 和 BigInt 相加，报错，不能混，强制类型转换


img设置了float,img脱离文档流居于左侧
- 浮动元素不只影响自己（脱离文档流），会影响周围的元素对齐（左|右）环绕
- block（p兄弟 不受影响），img 离开了文档流，所以block无视img
- 让inline 元素 （文本，element document.createTextNode('1231fsdf')） 围绕float元素来实现浮动布局。
- 文字环绕效果是float 典型的应用 




## float 元素特性

1. 块级框
    不管是行内还是块级，如果被设置了浮动，浮动元素会生成一个块级框(盒子的能力 block)，
    > 一旦浮动，立刻会像inline元素一样产生包裹性，宽度跟随内容适应（inline）

2. 高度塌陷
    block 宽度100%
    高度？是内容，文档流加高的   计算好来，父容器有多高？
=======
<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 15:24:36
 * @LastEditTime: 2022-04-26 16:45:49
 * @Description: 
 * 
-->
# es6 新的数据类型
    大数据 数值表示范围

js 简单数据类型
    String  boolen  number  undefined  null   bigint


- 大数据时代 ，es6 推出了新的简单数据类型  Bigint
- 适合大数相加，准确，不适合/,舍去小数
- 两种新建方式 1n BigInt("1")
- typeof bigint
- 不支持 隐式类型转换(+)   强制类型转换  BigInt()
- number 和 BigInt 相加，报错，不能混，强制类型转换


img设置了float,img脱离文档流居于左侧
- 浮动元素不只影响自己（脱离文档流），会影响周围的元素对齐（左|右）环绕
- block（p兄弟 不受影响），img 离开了文档流，所以block无视img
- 让inline 元素 （文本，element document.createTextNode('1231fsdf')） 围绕float元素来实现浮动布局。
- 文字环绕效果是float 典型的应用 




## float 元素特性

1. 块级框
    不管是行内还是块级，如果被设置了浮动，浮动元素会生成一个块级框(盒子的能力 block)，
    > 一旦浮动，立刻会像inline元素一样产生包裹性，宽度跟随内容适应（inline）

2. 高度塌陷
    block 宽度100%
    高度？是内容，文档流加高的   计算好来，父容器有多高？
>>>>>>> 3060b42 (第一次Git提交所有文件)
    浮动元素  不参加父元素的高度计算