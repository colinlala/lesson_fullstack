/*
 * @Date         : 2022-06-09 18:48:48
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-11 09:54:59
 * @description  : 手写bind
 */
// bind 在函数的原型上
//bind实现要复杂一点  因为他考虑的情况比较多 还要涉及到参数合并(类似函数柯里化)
Function.prototype.myBind = function (context, ...args) {
    if (!context || context === null) {
      context = window;
    }
    // 创造唯一的key值  作为我们构造的context内部方法名
    let fn = Symbol();
    context[fn] = this;
    let _this = this;
    //  bind情况要复杂一点
    const result = function (...innerArgs) {
      // 第一种情况 :若是将 bind 绑定之后的函数当作构造函数，通过 new 操作符使用，则不绑定传入的 this，而是将 this 指向实例化出来的对象
      // 此时由于new操作符作用  this指向result实例对象  而result又继承自传入的_this 根据原型链知识可得出以下结论
      // this.__proto__ === result.prototype   //this instanceof result =>true
      // this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype; //this instanceof _this =>true
      if (this instanceof _this === true) {
        // 此时this指向指向result的实例  这时候不需要改变this指向
        this[fn] = _this;
        this[fn](...[...args, ...innerArgs]); //这里使用es6的方法让bind支持参数合并
        delete this[fn];
      } else {
        // 如果只是作为普通函数调用  那就很简单了 直接改变this指向为传入的context
        context[fn](...[...args, ...innerArgs]);
        delete context[fn];
      }
    };
    // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
    // 实现继承的方式: 使用Object.create
    result.prototype = Object.create(this.prototype);
    return result;
  };
  
  //用法如下
  
  // function Person(name, age) {
  //   console.log(name); //'我是参数传进来的name'
  //   console.log(age); //'我是参数传进来的age'
  //   console.log(this); //构造函数this指向实例对象
  // }
  // // 构造函数原型的方法
  // Person.prototype.say = function() {
  //   console.log(123);
  // }
  // let obj = {
  //   objName: '我是obj传进来的name',
  //   objAge: '我是obj传进来的age'
  // }
  // // 普通函数
  // function normalFun(name, age) {
  //   console.log(name);   //'我是参数传进来的name'
  //   console.log(age);   //'我是参数传进来的age'
  //   console.log(this); //普通函数this指向绑定bind的第一个参数 也就是例子中的obj
  //   console.log(this.objName); //'我是obj传进来的name'
  //   console.log(this.objAge); //'我是obj传进来的age'
  // }
  
  // 先测试作为构造函数调用
  // let bindFun = Person.myBind(obj, '我是参数传进来的name')
  // let a = new bindFun('我是参数传进来的age')
  // a.say() //123
  
  // 再测试作为普通函数调用
  // let bindFun = normalFun.myBind(obj, '我是参数传进来的name')
  //  bindFun('我是参数传进来的age')
  



// call、apply、bind的区别

// 1. 都可以改变 this 指向
// 2. call 和 apply 会立即执行，bind 不会，而是返回一个函数
// 3. call 和 bind 可以接收多个参数，apply 只能接受两个，第二个是数组
// 4. bind 参数可以分多次传入