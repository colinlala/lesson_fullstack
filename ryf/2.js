// 面向对象的首要任务是封装，属性和方法，成为实例们的模板


// 不好的写法
// 猫  模板
let Cat = {
    name:'',
    color:'',
}

// 实例
let tom = {
    name:'Tom',
    color:'black',
}
// js 本没有类 不需要，{}
let cafei = {
    name:'加菲猫',
    color:'brown',
}

// 缺点？
    // 1. 写起来麻烦，没有构造函数，可以把实例化属性的过程封装一下
    // 2. 实例与原型没有任何联系     无法明显的知道tom，cafei是Cat的实例


