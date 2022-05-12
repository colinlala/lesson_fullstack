// 血缘关系
function objectFactory() {  // 实现和new一样的功能
    // Person 普通函数运行一下   apply
    let obj = {};  // 没有血缘关系  js的面向对象是原型式面向对象
    // 为什么不用arguments.shift()? arguments伪数组，没有shift方法
    var Constructor = [].shift.call(arguments);     //把shift方法借给arguments，此时的arguments只有name和age了，arguments[0]是Person;
    obj.__proto__ = Constructor.prototype;
    var res = Constructor.apply(obj, arguments);
    // 判断有没有返回值
    // return res ? res : obj;
    return typeof res === 'object' ? (res || obj) : obj; // 兼容有null返回时

}

function Person(name, age) {  // 编程风格 大写(小写也可以new)
    this.name = name;
    this.age = age;
    return null;   // 如果返回null时,就去忽略null
    // return {
    //     name,
    //     age,
    //     bb: '11'
    // }
}

let p = objectFactory(Person, 'zyh', 22);  // 引用式赋值
// console.log(p.bb)
console.log(p.name)
console.log(p.age)

