/*
 * @Date         : 2022-06-09 18:08:11
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-09 18:49:31
 * @description  : 手写bind 没有实现new、柯里化
 */
// bind 在函数的原型上
Function.prototype.myBind = function () {
    const self = this;   // test.bind()  此时的this指向test
    // const args = Array.prototype.slice.call(arguments);   
    const args = [...arguments];   // 类数组转数组，取得接收的参数，获取第一个参数好改变this
    const thisObj = args.shift();  // 第一个参数，剩下的是传的参数
    return function () {
        return self.apply(thisObj,args);  // 返回值不变
    }
}

// call、apply、bind的区别

// 1. 都可以改变 this 指向
// 2. call 和 apply 会立即执行，bind 不会，而是返回一个函数
// 3. call 和 bind 可以接收多个参数，apply 只能接受两个，第二个是数组
// 4. bind 参数可以分多次传入
