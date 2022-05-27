/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-27 20:57:17
 * @LastEditTime: 2022-05-27 21:04:14
 * @Description:promise 异步同步化的缺点
 */
// 回调退出历史舞台
// 发现promise 异步同步化的缺点
// es7 提出可不可以不要thenable太多。。。
function f1() {
    return new Promise((resolve) => {
        console.log('f1');
        setTimeout(resolve, 1000)
    })
}
function f2() {
    return new Promise((resolve) => {
        console.log('f2');
        setTimeout(resolve, 1000)
    })
}
function f3() {
    return new Promise((resolve) => {
        console.log('f3');
        setTimeout(resolve, 1000)
    })
}
function f4() {
    return new Promise((resolve) => {
        console.log('f4');
        setTimeout(resolve, 1000)
    })
}
function f5() {
    return new Promise((resolve) => {
        console.log('f5');
        setTimeout(resolve, 1000)
    })
}
// 异步任务很多的时候？ 回调 promise  then链
// 有点繁琐
f1()
    .then(() => {
        // 返回新的promise实例，继续then下去
        return f2()
    })
    .then(() => {
        return f3()
    })
    .then(() => {
        return f4()
    })
    .then(() => {
        return f5()
    })
