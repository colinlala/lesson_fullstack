<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-27 14:39:23
 * @LastEditTime: 2022-05-27 16:30:19
 * @Description: 
-->
- Q1:
    - Promise  理解
        1. Promise 是一个类，es6 提供的异步代码同步化的解决方案
        2. new Promise 构造函数执行过程都是同步任务  state: pading
        3. Promise.then 是一个异步任务 进入到event loop  
        4. resolve 后 state： fulfilled 执行完成
        5. 原来的单线程执行栈 同步代码，执行后，程序进入idle
        6. 去event loop里面找，如果状态还是peding，就不执行；fulfilled就执行。

- Q2:
    - js 执行 看成是任务
    1. 全局作用 最外层的任务（宏任务）, 没有必要进入event loop ，程序会进入idel状态，js会自动去轮询event loop，有没有需要执行的异步任务。
    2. promise.then会进入event loop，以微任务进入稍后的新的event loop队列中
    3. event loop中微任务先执行，再是宏任务
    4. js 就是依靠 单线程 + 同步任务 | 异步任务 + event loop 运行简单且高效
        - while（单线程快速运行，进入idle状态，进入event loop里找下有没有找到了要执行的任务）