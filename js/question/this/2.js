// es6 可以给函数默认值
function Person(name='未命名',age){
    this.name = name;
    this.age = age;
}

// 面向对象里，类的静态属性    描述类的，而不是表述实例的
Person.count = 0;  // 类，构造函数的
Person.species = '人类';
Person.prototype = {
    num: 1,
    count: 111,
}

let sm = new Person();
console.log(sm.num);
// console.log(sm.name);