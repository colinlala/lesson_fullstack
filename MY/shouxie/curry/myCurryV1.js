// 柯里化函数
// 一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
// 高阶函数的一种，好处主要是实现参数的复用和延迟执行，
//          不过性能上就会没那么好，要创建数组存参数，要创建闭包，
//          而且存取argements比存取命名参数要慢一点



// 每次调用的传进来的参数做累计处理
function reduce(...args) {
    return args.reduce((a, b) => a + b)
}
function currying(fn) {
    // 存放每次调用的参数
    let args = []
    return function temp(...newArgs) {
        if (newArgs.length) {
            // 有参数就合并进去，然后返回自身
            args = [...args, ...newArgs]
            return temp
        } else {
            // 没有参数了，也就是最后一个了，执行累计结果操作并返回结果
            let val = fn.apply(this, args)
            args = [] //保证再次调用时清空
            return val
        }
    }
}
// es6 实现
// function curry(fn, ...args) {
//     return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
// }
let add = currying(reduce)
console.log(add(1)(2, 3, 4)(5)())  //15
console.log(add(1)(2, 3)(4, 5)())  //15
console.log(add(1)(2)(3)(4)(5)())  //15


