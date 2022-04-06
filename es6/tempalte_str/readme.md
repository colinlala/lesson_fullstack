# 字符串模板

作用域 js 基础重要知识点

1. 块级作用域  
    {
        let a = 1 ；
    }
    console.log(a);

2. let const 
3. map 
    forEach   传统 
    map   返回新的数组  es6

4. 字符串模板
    - 俩个符号  
        tab上面的``
        ${ }占位符
    - 字符版 -> 字符串
        找到字符串，插入相应的值。模板的编译
    - 支持多行
        特别适合html模板


// function(){} 等价于 ()=>{}
// 箭头函数的使用带来的问题：
// 1）使用箭头函数，this的指向发生改变
// 2）使用箭头函数，arguments不能使用

// "fav(){}" 等价于"fav: function(){}"等价于"var fav=function(){}"
// "fav(){}" 就是定义一个名为fav的函数
// 总结：
// 使用对象的单体模式，对象单体模式就是一个函数
// 可以解决箭头函数this的指向和arguments不能使用的问题
