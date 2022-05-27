/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-27 20:11:02
 * @LastEditTime: 2022-05-27 20:17:00
 * @Description: 异步的sleep
 */
// 同步代码放到thenable里面去运行
function sleep(time) {
    // 耗时任务，封装在Promise内部  resolve
    // return new Promise(resolve => {
    //     resolve()
    // }, time)

    //  优化
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

sleep(1000)
    .then(() => {
        console.log('sleep之后要做的事情')
    })

console.log('1111')