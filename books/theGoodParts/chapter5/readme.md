<<<<<<< HEAD
# ***chapter 5 继承***

## 伪类

函数对象被创造时，Function构造器产生的函数对象会运行类似代码：      
``` 
     this.prototype = { constructor : this };
```
_prototype对象是存放继承特征的地方，重要的是prototype对象。_  
- 把原型类重构成一种与之相似的模式-伪类模式，称它为伪类。
```
var Car = function(loc) {
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};
Car.prototype.move = function(){
      this.loc++;
};
```
- 每个类都要创建一个对象，并且确保这个对象被委托到原型对象，并且返回这个对象。即这些行为会发生在每一个原型类中。如果函数调用前使用关键字new，就需要再对代码进行一些必要的重构。
```
this=Object.create(Car.prototype);
...
return this;
```
- 这行代码创建了一个将原型委托在Car.prototype中的对象，并且赋值给this，后面又返回this。这样即使你没有再程序中写出这行代码，解释器也可以把值赋给关键字this。重构后的代码：

```
var Car = function(loc) {
    this.loc = loc;
};
Car.prototype.move = function(){
      this.loc++;
};
```
> 如果在用构造器函数时忘记了在前面加上new前缀，那么this将不会被绑定到一个新对象上。既没编译警告，也没有运行错误。_最好的方法就是根本不用new！_

- 参考[http://t.csdn.cn/kX4eU]

## 对象说明符

- 记住构造器的一大堆参数的顺序很难
```
var myObj = maker (f, l, m, c, s);
```
> 对象说明符
```
var myObj = maker({
    first: f,
    last: l,
    state: s,
    city: c
});
```
> 现在多个参数可以按照任何顺序排列。

## 原型
- 纯粹的原型模式，会更专注于对象。
```
var myM = {
    name: 'H',
    get_name: func (){
        return this.name;
    },
    say : func(){
        return this.saying || '';
    }
};
```
- 构造更多的实例
```
var myC = Object.beget(myM);
myC.name = 'HH';
myC.saying = 'Hello';
myC.purr = func(n){
    var i , s = '';
    for(i=0; i<n ;i+=1){
        if(s){
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myC.get_name = func(){
    return this.says + '' +this.name+''+this.says;
};
```
> "差异化继承"，指明与所基于的基本对象的区别。
部件
## 函数化
???
## 部件
- 部件可以看成是一个对象的功能模块，故部件的组装可以看作这个对象的功能模块的扩展。而JavaScript中的对象实际上也是属性的集合，故对象功能模块的扩展，实际上也就是给对象添加额外的属性和方法。



=======
# ***chapter 5 继承***

## 伪类

函数对象被创造时，Function构造器产生的函数对象会运行类似代码：      
``` 
     this.prototype = { constructor : this };
```
_prototype对象是存放继承特征的地方，重要的是prototype对象。_  
- 把原型类重构成一种与之相似的模式-伪类模式，称它为伪类。
```
var Car = function(loc) {
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};
Car.prototype.move = function(){
      this.loc++;
};
```
- 每个类都要创建一个对象，并且确保这个对象被委托到原型对象，并且返回这个对象。即这些行为会发生在每一个原型类中。如果函数调用前使用关键字new，就需要再对代码进行一些必要的重构。
```
this=Object.create(Car.prototype);
...
return this;
```
- 这行代码创建了一个将原型委托在Car.prototype中的对象，并且赋值给this，后面又返回this。这样即使你没有再程序中写出这行代码，解释器也可以把值赋给关键字this。重构后的代码：

```
var Car = function(loc) {
    this.loc = loc;
};
Car.prototype.move = function(){
      this.loc++;
};
```
> 如果在用构造器函数时忘记了在前面加上new前缀，那么this将不会被绑定到一个新对象上。既没编译警告，也没有运行错误。_最好的方法就是根本不用new！_

- 参考[http://t.csdn.cn/kX4eU]

## 对象说明符

- 记住构造器的一大堆参数的顺序很难
```
var myObj = maker (f, l, m, c, s);
```
> 对象说明符
```
var myObj = maker({
    first: f,
    last: l,
    state: s,
    city: c
});
```
> 现在多个参数可以按照任何顺序排列。

## 原型
- 纯粹的原型模式，会更专注于对象。
```
var myM = {
    name: 'H',
    get_name: func (){
        return this.name;
    },
    say : func(){
        return this.saying || '';
    }
};
```
- 构造更多的实例
```
var myC = Object.beget(myM);
myC.name = 'HH';
myC.saying = 'Hello';
myC.purr = func(n){
    var i , s = '';
    for(i=0; i<n ;i+=1){
        if(s){
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myC.get_name = func(){
    return this.says + '' +this.name+''+this.says;
};
```
> "差异化继承"，指明与所基于的基本对象的区别。
部件
## 函数化
???
## 部件
- 部件可以看成是一个对象的功能模块，故部件的组装可以看作这个对象的功能模块的扩展。而JavaScript中的对象实际上也是属性的集合，故对象功能模块的扩展，实际上也就是给对象添加额外的属性和方法。



>>>>>>> 3060b42 (第一次Git提交所有文件)
