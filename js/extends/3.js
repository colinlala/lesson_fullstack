/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 21:22:12
 * @LastEditTime: 2022-04-27 21:32:04
 * @Description: 继承 prototype模式
 * 
 */
function Animal() { //父类
    this.species = "动物";
}
Animal.prototype.sayHi = function () {
    console.log('lalalalalalalalalal');
}
function Cat(name, color) {
    this.name = name;
    this.color = color;
}

// prototype模式
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
let cat = new Cat();
console.log(cat.species, cat.sayHi());
