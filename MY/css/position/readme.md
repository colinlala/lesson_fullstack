<<<<<<< HEAD
1. static
    - 默认没有定位

2. fixed
    - 固定定位，相对于浏览器窗口进行定位
3. relative
    - 相对于自身定位，不脱离文档流
    - 如果有left，right，top，bottom--> 只剩下left，top
4. absolute
    - 相对于第一个有relative的父元素，脱离文档流
    - 如果有left，right，top，bottom--> left，right，top，bottom
=======
<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-12 17:06:01
 * @LastEditTime: 2022-04-27 20:29:33
 * @Description: 
 * 
-->
1. static
    - 默认没有定位
    - 对left，right，top，bottom无效

2. fixed
    - 固定定位，相对于浏览器窗口进行定位
3. relative
    - 相对于自身定位，***不脱离文档流***
    - 让其子元素与自身定位
    - 如果有left，right，top，bottom--> 只剩下left，top
4. absolute
    - 相对于第一个有relative的父元素，***脱离文档流***
    - 如果有left，right，top，bottom--> left，right，top，bottom

子绝父相

https://www.bilibili.com/video/BV1iE411W7ug?spm_id_from=333.1007.top_right_bar_window_view_later.content.click
>>>>>>> 3060b42 (第一次Git提交所有文件)
