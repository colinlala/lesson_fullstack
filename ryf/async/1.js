/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-24 15:11:25
 * @LastEditTime: 2022-05-24 15:18:11
 * @Description: 
 */
// 异步任务 async task     event loop
setTimeout(() => {
    console.log('timeout');
}, 2000)
// 同步任务 sync task
console.log('1111')