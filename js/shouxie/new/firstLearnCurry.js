function add(a, b, c) {
    return a + b + c;
}
// add.length返回的是函数参数的个数
// let res = add(1, 2, 3);

// 三个参数每次只能给一个？
// add(1)(2)(3)

/**
 * @description: 函数的柯里化，减少代码冗余，以及增加代码的可读性。
 * @param {function} fun
 * @return {function}
 */
function curry(fun) {
    // 函数嵌套函数，内部函数会被返回到外部，并得以执行
    // 闭包空间中
    // 慢慢收集拿到的参数
    // fun 等在闭包空间里的永生变量在被闭包函数声明时已经存在
    // 申明时
    let judge = (...args) => {
        if (args.length == fun.length) return fun(...args);
        return (...arg) => judge(...args, ...arg);
    }
    return judge;
    // return (args) => {
    //     // 函数运行时可以访问到声明时的变量  fun
    // }


}

// 得到被闭包的函数
let addCurry = curry(add);    // 返回值：函数
// 一次接受一个参数，.....，直到接受到的参数等于，add需要的参数数量，执行，并返回结果
// 执行函数
console.log(addCurry(1)(2)(3))
console.log(addCurry(1, 2)(3))
console.log(addCurry(1)(2, 3))



