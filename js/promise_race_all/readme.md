<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 15:42:42
 * @LastEditTime: 2022-06-04 18:02:37
 * @Description: 
-->
- 脚本文件中定义了Promise

- async.html
    1. 首先创建了两个函数， 代码执行从30行开始
    2. 函数里面的同步代码 async1 start先打印
    3. 之后碰到 await ，阻塞 async1 后面代码的运行。从async1跳转到async2运行，（理解为，await下面的语句就好像thenable语句一样，得放入任务队列，等执行栈的任务结束后再执行后面的语句）
    