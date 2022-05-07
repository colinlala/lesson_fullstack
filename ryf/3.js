<<<<<<< HEAD
// js 解决实例和类之间的关系

// java的this属于class  方法之间，共享属性和方法 this.
//  js 在函数中引入this  new方式运行 不需要返回对象（call constructor），让函数看起来更象构造函数
function Cat(name,color){
    this.name = name;
    this.color = color;
}

let cat1 = new Cat('大毛','yellow');
let cat2 = new Cat('二毛','black');

console.log(cat1.constructor);  // 父子关系
console.log(cat1.constructor == cat2.constructor); //兄弟关系
console.log(cat1.__proto__ == cat2.__proto__); //兄弟关系
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor); //兄弟关系
console.log(cat1.__proto__) //原型对象

console.log(Cat.prototype.isPrototypeOf(cat1))  // Cat是否是cat1的原型


=======
// js 解决实例和类之间的关系

// java的this属于class  方法之间，共享属性和方法 this.
//  js 在函数中引入this  new方式运行 不需要返回对象（call constructor），让函数看起来更象构造函数
function Cat(name,color){
    this.name = name;
    this.color = color;
}

let cat1 = new Cat('大毛','yellow');
let cat2 = new Cat('二毛','black');

console.log(cat1.constructor);  // 父子关系
console.log(cat1.constructor == cat2.constructor); //兄弟关系
console.log(cat1.__proto__ == cat2.__proto__); //兄弟关系
console.log(cat1.__proto__.constructor == cat2.__proto__.constructor); //兄弟关系
console.log(cat1.__proto__) //原型对象

console.log(Cat.prototype.isPrototypeOf(cat1))  // Cat是否是cat1的原型


>>>>>>> 3060b42 (第一次Git提交所有文件)
