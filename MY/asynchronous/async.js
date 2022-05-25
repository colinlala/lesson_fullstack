/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 16:41:47
 * @LastEditTime: 2022-05-25 17:17:34
 * @Description:异步解决方案三async+await
 */
// async函数就是Generator函数的语法糖，async函数返回的是Promise对象
// async + await来简化Generator函数的代码



// const delay = n => new Promise(resolve => {
//     setTimeout(() => {
//         console.log(n)
//     }, 1000)
// });
// // async异步函数
// async function g() {
//     for (let i = 1; i <= 5; i++) {
//         const x = await delay(i)
//         console.log(x);
//     }
// }
// g();


// 1. 内置执行器
// async函数的执行，与普通函数一样
// 2. 语义好
// async表示函数里面有异步操作，await表示紧跟后面的表达式需要等待结果（可读性强）
// 3. 适用性强
// co模块约定，yield命令后只能是Promise对象，而saync函数的await命令后可以是Promise对象和原始类型的值（数值，字符串，布尔值，成功态的Promise对象）
// 实际开发中都是Promise对象
// 4. 返回值是Promise对象
// async函数完全可以看做多个异步操作，包装成一个Promise对象，await就是内部的then简化的语法糖


// 用同步的方式写异步的代码
// const fn = async () => {
//     console.log(123)
//     const n = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(456)
//         }, 2000)
//     })
//     console.log(n);
//     console.log(789)
// }
// fn()
// 123
// 456
// 789



// 错误捕捉
// const fn = async () => {
//     console.log(123)
//     // await后面跟得是成功态的Promise实例，然后await会自动提取到resolve中的结果返回
//     // 如果await后面的Promise实例是失败态的，那么代码执行就会中断
//     // await不会提取reject的结果，这时我们就需要手动捕捉错误，借助try-catch
//     try {
//         const n = await new Promise((resolv, reject) => {
//             setTimeout(() => {
//                 // resolve(456)
//                 reject(456)
//             }, 2000)
//         })
//         console.log(n);
//         console.log(789)        // 不打印
//     } catch (error) {
//         console.log('catch', error)    // 捕捉到错误后，中断运行789 不打印
//     } finally {
//         console.log('finally')
//     }
//     console.log(0)      // 可以打印
// }
// fn()


// --------------------------------------------------------------------------------------
// 每一秒打印0,1,2,3,4,5,
function sun(item) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(item)
        }, 1000)
    })
}
async function fn() {
    for (let i = 0; i <= 5; i++) {
        const s = await sun(i)
        console.log(s)
    }
    console.log('在里面，我是同步的。对于整个还是异步的。three')
}
console.log('在外面，还是我先one')
fn()
console.log('在外面，然后是我two')
