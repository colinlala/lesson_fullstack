<<<<<<< HEAD
// 传统的面向对象  { 对象字面量 }
// es5 后期提供 class    js原来并没有类

class Cat {
    // 构造器
    constructor( name ) {
        this.name = name;
    }

    // 方法
    makeSound (){
        console.log('妙妙妙');
    }
}


const xm = new Cat('小黑');
=======
// 传统的面向对象  { 对象字面量 }
// es5 后期提供 class    js原来并没有类

class Cat {
    // 构造器
    constructor( name ) {
        this.name = name;
    }

    // 方法
    makeSound (){
        console.log('妙妙妙');
    }
}


const xm = new Cat('小黑');
>>>>>>> 3060b42 (第一次Git提交所有文件)
xm.makeSound();