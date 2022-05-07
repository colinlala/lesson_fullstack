<<<<<<< HEAD
//  继承
//  父类
var Animal = {
    createNew:function(){
        var animal = {};
        animal.sleep = function() {
            console.log('sleep');
        } 
        return animal;
    }
}


//  Cat成为Animal的子类
var Cat = {
    createNew:function(name){
        var cat = Animal.createNew();
        cat.name = name;
        var sound = '喵喵喵';  // 这下就私有了 private
        cat.makeSound= function(){
            // console.log('喵一下')
            console.log(sound)
        }
        return cat;
    }
}

var tom = Cat.createNew('唐末');
console.log(tom.name);  // 公共属性public  
// console.log(tom.sound);  // private
tom.makeSound();
=======
//  继承
//  父类
var Animal = {
    createNew:function(){
        var animal = {};
        animal.sleep = function() {
            console.log('sleep');
        } 
        return animal;
    }
}


//  Cat成为Animal的子类
var Cat = {
    createNew:function(name){
        var cat = Animal.createNew();
        cat.name = name;
        var sound = '喵喵喵';  // 这下就私有了 private
        cat.makeSound= function(){
            // console.log('喵一下')
            console.log(sound)
        }
        return cat;
    }
}

var tom = Cat.createNew('唐末');
console.log(tom.name);  // 公共属性public  
// console.log(tom.sound);  // private
tom.makeSound();
>>>>>>> 3060b42 (第一次Git提交所有文件)
tom.sleep();