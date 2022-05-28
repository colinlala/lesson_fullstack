<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 15:48:45
 * @LastEditTime: 2022-05-28 16:02:03
 * @Description: 三行布局
-->
- 三行布局（头尾固定、高度主栏、自适应）
    1. calc函数方便解决了，缺点性能不好
    2. flex grid 自带主列功能，也方便
    3. 定位 头，尾放到相应的位置
    4. 高度是可以继承的，html，body， .layout 一路继承，不会默认继承，跳出继承-相对单位vh（相对屏幕）
    5. flex本质是弹性的分配空间