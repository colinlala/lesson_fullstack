// 解决2.js的化繁为简为函数封装简单，一定要用this？

// 构造函数 封装实例化过程，更加简便
function Cat(name , color){
    return {
        name:name,
        color:color,
    }
}

let obj = new Object()
let cat1 = Cat('Tom','black');
console.log(cat1.color,cat1.name)
console.log(cat1 instanceof Cat)
