<<<<<<< HEAD
# oo  面向对象程序(Object Oriented Programming)



- 构造函数  原型对象  实例   三者对象
    1. 首字母大写的函数(普通函数)，内部this指向未来的实例，以new的方式运行  
        js 没有class关键字时代（es6之前），用函数+prototype对像，模拟传统面向对象编程，称之为原型式的面向对象
        - 原型对象 是构造函数的prototype属性，没有内存担忧的，向实例提供共享的方法
        - 实例具体 ， 用于业务，实力通过自身的__proto__ 私有属性，共享，构造函数的原型对象上的方法


    2. 彼此都独立又相互关联的
        Dog ->  prototype  ->  {makeSound,eat}
        原型对象和构造函数：通过原型对象找到构造函数（xb.__proto__.constructor）  



=======
# oo  面向对象程序(Object Oriented Programming)



- 构造函数  原型对象  实例   三者对象
    1. 首字母大写的函数(普通函数)，内部this指向未来的实例，以new的方式运行  
        js 没有class关键字时代（es6之前），用函数+prototype对像，模拟传统面向对象编程，称之为原型式的面向对象
        - 原型对象 是构造函数的prototype属性，没有内存担忧的，向实例提供共享的方法
        - 实例具体 ， 用于业务，实力通过自身的__proto__ 私有属性，共享，构造函数的原型对象上的方法


    2. 彼此都独立又相互关联的
        Dog ->  prototype  ->  {makeSound,eat}
        原型对象和构造函数：通过原型对象找到构造函数（xb.__proto__.constructor）  



>>>>>>> 3060b42 (第一次Git提交所有文件)
- 极简方式 Object.create()