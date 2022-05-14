// Dog 基类
// Animal 父类 -> Dog 子类
// 1. extends
// 2. super

class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    drink() {
        this.thirst -= 10;
        // return this.thirst;
        return this;   // 完成链式编程

    }
    eat(food) {
        this.belly.push(food);
        // return this.belly;
        return this;   // 完成链式编程
    }
}

class Dog extends Animal {
    // 如果继承的子类写了构造函数，就必须调用父类的构造函数
    // 子类如果有属性和父类不一样，就写构造函数。不然就不写直接继承，拿来用
    constructor(name, breed) {
        super(name);
        this.breed = breed;   // 子类有的
    }
    bark() {
        console.log('BARK BARK BARK!');
    }
}


const sunny = new Dog('Sunny');
// 链式编程  把返回值 改成this
sunny.eat('烤鱼').drink().eat('火锅').drink().eat('烤串');
console.log(sunny.thirst, sunny.belly)  