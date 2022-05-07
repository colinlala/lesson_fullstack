<<<<<<< HEAD
// 语言第四章  函数
// 当函数名大写 ， 构造函数
// js 函数就可以构造一个类   js早期没有class关键字，但不影响它做Java的传统面向对象编程
// 函数是一等对象 可以用来构造对象   js  其实没有类


function Cat(name){
    //给一组对象添加属性
    this.name = name;
    // 不建议这样写 内存开销复杂得多  入栈，分配堆内存
    // this.makeSound = function(){
    //     console.log('妙妙妙');
    // }

}

// 是一个构造对象的函数   函数也是对象
// js函数对象有prototype属性
// 共有的方法在prototype中
Cat.prototype.makeSound = function(){
    console.log('妙妙妙');
}



// 同一组对象 共同的类方法、属性模板
var xm = new Cat('小黑')
xm.makeSound();
console.log(xm.name);

// var xh = new Cat('小花')
// console.log(xm === xh);   //false
// // 如何判断俩个对象是兄弟?
// console.log(xm.constructor === xh.constructor);   //true
// //  如何判断对象是某类的实例?
// console.log(xm instanceof Cat);   //true

// // Object 既是对象又是函数
// // 函数是一等对象

// let a = {};   // 对象字面量的构造函数
// let obj = new Object();  // 对象字面量
// console.log(obj instanceof Object);  // true
console.log(Cat.prototype);








=======
// 语言第四章  函数
// 当函数名大写 ， 构造函数
// js 函数就可以构造一个类   js早期没有class关键字，但不影响它做Java的传统面向对象编程
// 函数是一等对象 可以用来构造对象   js  其实没有类


function Cat(name){
    //给一组对象添加属性
    this.name = name;
    // 不建议这样写 内存开销复杂得多  入栈，分配堆内存
    // this.makeSound = function(){
    //     console.log('妙妙妙');
    // }

}

// 是一个构造对象的函数   函数也是对象
// js函数对象有prototype属性
// 共有的方法在prototype中
Cat.prototype.makeSound = function(){
    console.log('妙妙妙');
}



// 同一组对象 共同的类方法、属性模板
var xm = new Cat('小黑')
xm.makeSound();
console.log(xm.name);

// var xh = new Cat('小花')
// console.log(xm === xh);   //false
// // 如何判断俩个对象是兄弟?
// console.log(xm.constructor === xh.constructor);   //true
// //  如何判断对象是某类的实例?
// console.log(xm instanceof Cat);   //true

// // Object 既是对象又是函数
// // 函数是一等对象

// let a = {};   // 对象字面量的构造函数
// let obj = new Object();  // 对象字面量
// console.log(obj instanceof Object);  // true
console.log(Cat.prototype);








>>>>>>> 3060b42 (第一次Git提交所有文件)
