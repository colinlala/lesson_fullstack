// js没有类，只有对象
// Cat类    构造函数   new Object()
var Cat = {
    //  es6  构造函数
    //  降低难度 不用prototype
    createNew(name){
        var cat = {};
        // 属性，方法
        cat.name = name;
        cat.makeSound= function(){
            console.log('喵喵喵')
        }
        return cat;
    }
    //  es5
    // creatNew:function(){
    // }

}

// Cat实例
var tom = Cat.createNew('小毛');//  比2.js好一点，直接传值
console.log(tom.name);   // undefined

var garfield = Cat.createNew('加菲');
console.log(garfield.name);
console.log(garfield.makeSound);
