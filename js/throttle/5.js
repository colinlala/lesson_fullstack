/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-27 21:04:47
 * @LastEditTime: 2022-05-27 21:10:43
 * @Description: async await
 */
// async await 出来
// 没有抛弃promise   抛弃了烦人的thenable链条
function sleep(time) {
    // 耗时任务，封装在Promise内部  resolve
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}
// es7  函数的修饰符   async函数
(async function () {
    // 函数内部的异步任务，如果是用promise来封装的话，可以实现同步化的效果
    console.log('Do some thing,' + new Date());
    // await 右边的返回值是promise实例
    await sleep(3000);  // await 是与 async一起出来的
    console.log('Do some thing,' + new Date());
})();
sleep(2000)
