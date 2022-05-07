<<<<<<< HEAD
/**
 * 面试中的编程题 写一个函数
 * 传统的面向对象语言  实例
 * dog   Object实例出来，原型链，
 * dog.__proto__ ->    ==   old.prototype   old是now的原型对象
 * dog.__proto__.__proto__... -> null
 * instanceof 在传统语言中判断的是now是old的实例
 * js中  instsanceof 运输符，用于判断构造函数的protype属性是否出现在对象的原型链中的任何位置
 * @func instanceof 实现
 * @params now 实例对象  old 原型对象
 * @returns boolean 
*/

// constructor
function Dog(){// 构造函数
}
function Cat(){
}
// 原型
Dog.prototype.sayHi = function(){

}
function myInstanceof(now,old){
    // 原型
    let proto = Object.getPrototypeOf(now);   // 返回对象的原型对象
    let prototype = old.prototype;
    // console.log(proto,now.__proto__);
    // console.log(proto == now.__proto__);
    while(true){
        if(!proto)return false;   // null
        if(proto === prototype)return true;
        proto = Object.getPrototypeOf(proto);  //null
    }

}

const dog = new Dog();
console.log(myInstanceof(dog,Dog));
console.log(myInstanceof(dog,Object));
console.log(myInstanceof(dog,Cat));
console.log(myInstanceof(Object,null));

// myInstanceof(dog,Object);
// myInstanceof(dog,Cat);










// function myInstanceof(now,old){
//     let link = now.__proto__;
//     while(link !== null){
//         if(link === old.prototype)return true;
//         link = link.__proto__;
//     }
//     return false;
=======
/**
 * 面试中的编程题 写一个函数
 * 传统的面向对象语言  实例
 * dog   Object实例出来，原型链，
 * dog.__proto__ ->    ==   old.prototype   old是now的原型对象
 * dog.__proto__.__proto__... -> null
 * instanceof 在传统语言中判断的是now是old的实例
 * js中  instsanceof 运输符，用于判断构造函数的protype属性是否出现在对象的原型链中的任何位置
 * @func instanceof 实现
 * @params now 实例对象  old 原型对象
 * @returns boolean 
*/

// constructor
function Dog(){// 构造函数
}
function Cat(){
}
// 原型
Dog.prototype.sayHi = function(){

}
function myInstanceof(now,old){
    // 原型
    let proto = Object.getPrototypeOf(now);   // 返回对象的原型对象
    let prototype = old.prototype;
    // console.log(proto,now.__proto__);
    // console.log(proto == now.__proto__);
    while(true){
        if(!proto)return false;   // null
        if(proto === prototype)return true;
        proto = Object.getPrototypeOf(proto);  //null
    }

}

const dog = new Dog();
console.log(myInstanceof(dog,Dog));
console.log(myInstanceof(dog,Object));
console.log(myInstanceof(dog,Cat));
console.log(myInstanceof(Object,null));

// myInstanceof(dog,Object);
// myInstanceof(dog,Cat);










// function myInstanceof(now,old){
//     let link = now.__proto__;
//     while(link !== null){
//         if(link === old.prototype)return true;
//         link = link.__proto__;
//     }
//     return false;
>>>>>>> 3060b42 (第一次Git提交所有文件)
// }