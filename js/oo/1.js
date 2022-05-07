<<<<<<< HEAD
// 传统面向对象
// 类是对象的属性和方法模板
// class Dog{
//     // 构造函数
//     constructor(type,color) {
//         this.type = type;
//         this.color = color;
//     }
//     makeSound() {
//         console.log('汪');
//     }
//     eat(){
//         console.log('吃骨头');
//     }
// }




// js 原型式面向对象
function Dog(type,color){
    this.type = type;
    this.color = color;
}
// 任何函数都有prototype对象    方法
// Dog.prototype  xb  smy 有什么关系？
//    xb  smy 是Dog的实例 
// Dog.prototype.makeSound=function(){
//     console.log('汪');
// }
// Dog.prototype.eat=function(){
//     console.log('吃骨头');
// }
Dog.prototype = {
    makeSound:function(){
        console.log(`${this.type}  汪汪`);
    },
    eat:function(){
        console.log('吃骨头');
    }
}



// 构造函数（属性），原型对象（方法）  实例
// 把构造函数运行，以new的方式运行this，指向xb



// 相同：构造函数相同
const xb = new Dog('小黑','白色');
const smy = new Dog('萨摩耶','黑色');

// console.log(xb.constructor === smy.constructor);

// __私有属性
// 实例对象都有一个__proto__，指向构造函数的prototype对象
console.log(xb.__proto__);//{ makeSound: [Function: makeSound], eat: [Function: eat] }

// xb 构造器有没有相应的属性，可以去原型（prototype）对象上查找
xb.makeSound();


console.log(xb.__proto__.constructor);




// // 如何判断俩个对象是兄弟?
// console.log(xm.constructor === xh.constructor);   //true
// //  如何判断对象是某类的实例?
// console.log(xm instanceof Cat);   //true


=======
// 传统面向对象
// 类是对象的属性和方法模板
// class Dog{
//     // 构造函数
//     constructor(type,color) {
//         this.type = type;
//         this.color = color;
//     }
//     makeSound() {
//         console.log('汪');
//     }
//     eat(){
//         console.log('吃骨头');
//     }
// }




// js 原型式面向对象
function Dog(type,color){
    this.type = type;
    this.color = color;
}
// 任何函数都有prototype对象    方法
// Dog.prototype  xb  smy 有什么关系？
//    xb  smy 是Dog的实例 
// Dog.prototype.makeSound=function(){
//     console.log('汪');
// }
// Dog.prototype.eat=function(){
//     console.log('吃骨头');
// }
Dog.prototype = {
    makeSound:function(){
        console.log(`${this.type}  汪汪`);
    },
    eat:function(){
        console.log('吃骨头');
    }
}



// 构造函数（属性），原型对象（方法）  实例
// 把构造函数运行，以new的方式运行this，指向xb



// 相同：构造函数相同
const xb = new Dog('小黑','白色');
const smy = new Dog('萨摩耶','黑色');

// console.log(xb.constructor === smy.constructor);

// __私有属性
// 实例对象都有一个__proto__，指向构造函数的prototype对象
console.log(xb.__proto__);//{ makeSound: [Function: makeSound], eat: [Function: eat] }

// xb 构造器有没有相应的属性，可以去原型（prototype）对象上查找
xb.makeSound();


console.log(xb.__proto__.constructor);




// // 如何判断俩个对象是兄弟?
// console.log(xm.constructor === xh.constructor);   //true
// //  如何判断对象是某类的实例?
// console.log(xm instanceof Cat);   //true


>>>>>>> 3060b42 (第一次Git提交所有文件)
