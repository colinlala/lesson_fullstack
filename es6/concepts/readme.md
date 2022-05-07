<<<<<<< HEAD
# es6
1. let const var 区别
2. 作用域{}
3. for of
4. 字符串模板
5. Object.create()  
    代替 传统的面向对象 Function + prototype 学习成本高



- 函数背后的底层实现有[call]和[constructor]俩部分，函数都有this。
    1. 普通函数来运行的时候，this指向**全局**；
        this没有必要，在函数内可以访问到全局的变量。
    2. 严格模式（'use strict'）运行的时候，更专业，this指向**undefined**。



    > 对象的方法来使用的话，this指针，通过构造函数来完成对象的属性

    > 箭头函数 ， 简便优雅直率
        只有call  ，没有constructor  
        没有this  ，this会是外层作用域里面的this  
        没有arguments
        没有prototype

- left变量名 = 值
    1. 赋值，值是简单数据类型的话
=======
# es6
1. let const var 区别
2. 作用域{}
3. for of
4. 字符串模板
5. Object.create()  
    代替 传统的面向对象 Function + prototype 学习成本高



- 函数背后的底层实现有[call]和[constructor]俩部分，函数都有this。
    1. 普通函数来运行的时候，this指向**全局**；
        this没有必要，在函数内可以访问到全局的变量。
    2. 严格模式（'use strict'）运行的时候，更专业，this指向**undefined**。



    > 对象的方法来使用的话，this指针，通过构造函数来完成对象的属性

    > 箭头函数 ， 简便优雅直率
        只有call  ，没有constructor  
        没有this  ，this会是外层作用域里面的this  
        没有arguments
        没有prototype

- left变量名 = 值
    1. 赋值，值是简单数据类型的话
>>>>>>> 3060b42 (第一次Git提交所有文件)
    2. 引用式赋值，值是复杂数据类型的话