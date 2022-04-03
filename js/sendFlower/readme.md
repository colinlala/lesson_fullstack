# JS 送花
## talk in js

- 1.js运行在浏览器代理中（url），宿主环境（window 全局对象）
    - typeof window 对象  生而知之  
    - a b name 全局作用域
    - c 声明在函数中   函数     局部作用域

- es6 let const 与 var的区别
    1. 相同点，都是全局，属于声明所在的作用域  
        直接用变量名来直接访问  
        a,  
        b,  
        name  
    2. var 会自动挂载在window对象上  
        其实是副作用，不太对的,  
        以后就不要用 ***let 可以完全取代***
    3. let  const 不会挂载在window对象上  

    4. const 常量 不可以修改  
        > 如果是简单数据类型，值不能变
        > 如果是复杂数据类型，值可以变，类型不能变