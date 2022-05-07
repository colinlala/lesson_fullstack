<<<<<<< HEAD
function Cat(name,color){
    this.name = name;
    this.color = color;

    // 浪费属性 ， 应该共享
    // 需要指向一个新的，构造函数之外的内存空间，封装共同的属性和方法
    // this.type = '猫科动物';  // 不会变的属性
    // this.eat = function(){
    //     console.log('eat 老鼠')
    // }
}

// 共同属性 ，用protoype
Cat.prototype.eat = function(){
    console.log('eat 老鼠');
}
Cat.prototype.type = '猫科动物';
// 被所有实例共享，不浪费内存
// 1. 省内存
// 2. 所有实例共享prototype对象上的属性和方法
// 3. 实例如何共享 prototype对象的呢--this可以找到构造函数和prototype上的



let cat1 = new Cat('Tom','黑色');   // 内存，分配了新的内存空间
let cat2 = new Cat('小毛','白色');   // Cat里面的type和eat一样 浪费内存空间



// 如何区分 对象本身的属性(constructor),prototype对象上的属性？
//    
console.log(cat1.hasOwnProperty('name'),cat1.hasOwnProperty('type'))  //type不是对象本身的属性，type是prototype对象上的属性

console.log(cat2.type);  //为什么可以找到？先到OwnProperties去查找，如果有就返回，没有就继续到prototype对象上去找
// js 通过什么语法来实现的呢？   通过__proto__，只要在原型对象上，也可以直接调用
console.log(cat2.name,cat2.type,cat2.__proto__.type);    // 小毛 猫科动物 猫科动物

// toSting属于object 的    原型链
console.log(cat2.toSring()); 
console.log(cat2.__proto__); // Cat { eat: [Function (anonymous)], type: '猫科动物' }
console.log(cat2.__proto__.__proto__);              // {}
console.log(cat2.__proto__.__proto__.__proto__);     // null
=======
function Cat(name,color){
    this.name = name;
    this.color = color;

    // 浪费属性 ， 应该共享
    // 需要指向一个新的，构造函数之外的内存空间，封装共同的属性和方法
    // this.type = '猫科动物';  // 不会变的属性
    // this.eat = function(){
    //     console.log('eat 老鼠')
    // }
}

// 共同属性 ，用protoype
Cat.prototype.eat = function(){
    console.log('eat 老鼠');
}
Cat.prototype.type = '猫科动物';
// 被所有实例共享，不浪费内存
// 1. 省内存
// 2. 所有实例共享prototype对象上的属性和方法
// 3. 实例如何共享 prototype对象的呢--this可以找到构造函数和prototype上的



let cat1 = new Cat('Tom','黑色');   // 内存，分配了新的内存空间
let cat2 = new Cat('小毛','白色');   // Cat里面的type和eat一样 浪费内存空间



// 如何区分 对象本身的属性(constructor),prototype对象上的属性？
//    
console.log(cat1.hasOwnProperty('name'),cat1.hasOwnProperty('type'))  //type不是对象本身的属性，type是prototype对象上的属性

console.log(cat2.type);  //为什么可以找到？先到OwnProperties去查找，如果有就返回，没有就继续到prototype对象上去找
// js 通过什么语法来实现的呢？   通过__proto__，只要在原型对象上，也可以直接调用
console.log(cat2.name,cat2.type,cat2.__proto__.type);    // 小毛 猫科动物 猫科动物

// toSting属于object 的    原型链
console.log(cat2.toSring()); 
console.log(cat2.__proto__); // Cat { eat: [Function (anonymous)], type: '猫科动物' }
console.log(cat2.__proto__.__proto__);              // {}
console.log(cat2.__proto__.__proto__.__proto__);     // null
>>>>>>> 3060b42 (第一次Git提交所有文件)
