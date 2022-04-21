// 原型式的面向对象
// constructor
function Dog(){// 构造函数

}
// 原型
Dog.prototype.sayHi = function(){

}

const dog = new Dog();
console.log(dog instanceof Dog);     // Dog是dog的原型对象
console.log(dog instanceof Object);    //Object 原型链



