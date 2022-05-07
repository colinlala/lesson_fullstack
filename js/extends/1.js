<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 20:50:46
 * @LastEditTime: 2022-04-27 21:03:32
 * @Description: es6  继承  extends关键字 super关键字
 * 
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} 打招呼`);
    }
}
class Dog extends Animal {
    constructor(name, type) {
        super(name); // 父类的name
        this.type = type;
    }
    sayHi() {
        console.log(`${this.name} 汪汪汪`)
    }
}

// js 里面的class extends super 只是语法糖，原型式的面向对象
const dog = new Dog('大毛', '拉布拉多');
// console.log(dog);
console.log(dog.__proto__);
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 20:50:46
 * @LastEditTime: 2022-04-27 21:03:32
 * @Description: es6  继承  extends关键字 super关键字
 * 
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(`${this.name} 打招呼`);
    }
}
class Dog extends Animal {
    constructor(name, type) {
        super(name); // 父类的name
        this.type = type;
    }
    sayHi() {
        console.log(`${this.name} 汪汪汪`)
    }
}

// js 里面的class extends super 只是语法糖，原型式的面向对象
const dog = new Dog('大毛', '拉布拉多');
// console.log(dog);
console.log(dog.__proto__);
>>>>>>> 3060b42 (第一次Git提交所有文件)
