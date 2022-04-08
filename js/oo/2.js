// 原型式的面向对象 缺点：学习成本大 prototype
// es6新方案 减少学习成本
var Cat = {
    name:'小毛',
    makeSound:function() {
        console.log('喵喵喵喵')
    }
}

// //  Cat 模板
// var garfield = {
//     name:'加菲',
//     makeSound:function() {
//         console.log('喵喵喵喵')
//     }
// }

// var tom = {
//     name:'汤姆',
//     makeSound:function() {
//         console.log('喵喵喵喵')
//     }
// }



var tom = Object.create(Cat);// 替代了new， prototype
// console.log(tom.name)
// tom.makeSound()
tom.name = 'Tom';
console.log(tom.name);//只能这样改名

console.log(tom.__proto__)
console.log(tom.__proto__.constructor)
