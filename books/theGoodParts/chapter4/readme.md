<<<<<<< HEAD
# ***chapter 4***
## 对象  
## 函数字面量
     保留字function
     var add = function(a,b){
        return a+b;
    }; 
## 调用
- 方法调用模式  

    > myObj有一个value属性和一个increment方法
    ``` 
    var myObj = {  
        value: 0;  
        increment: fun(inc){  
            this.value += typeof inc === 'number' ? inc:1;  
        }  
    };  
    myObj.increment();  
    document.writeln(myObk.value);  //1  
    ```
- 函数调用模式

    > 函数调用时，this被绑定到全局对象，解决方法就是：定义变量赋值为this
    ``` 
    myObj.dou =fun() {
        var that = this; //解决方法
        var helper = fun(){
            that.value = add(that.value,that.value);
        };  
        helper(); //以函数的形式调用  
    };  

    //以方法的形式调用dou
    myObj.dou();
    ```

- 构造器调用模式
    > 不太推荐使用
    ```
    //创造一个Q的构造器函数
    var Q = fun(string){
        this.status = string;
    };

    //给Q所有实例提供一个get_status方法
    Q.prototype.get_status = fun(){
        return this.status;
    };

    //构造一个Q实例
    var myQ = new Q("KKKK");
    ```


- apply调用模式
    > apply方法接受俩个参数，1.this 2.一个参数数组
    ```
    var array = [3,4];
    var sum = add.apply(null,array);  //7
    var statusObj = {
        status: 'AAA';
    };

    //statusObj没有继承Q.prototype,但是可以在statusObj上调用get_status方法
    var ststus = Q.prototype.get_status.apply(statusObj); //AAAA 
    ```

## 参数
- 函数被调用时，会得到arguments数组，但ta不是一个真正的数组，只有一个length属性，缺少所有数组的方法

## 返回
- return
## 异常
```
var add = fun(a,b){
    if(typeof a!== 'number' || typeof b!== 'number'){
        throw{
            name:'TypeError',
            message:'add needs numbers'
        };
    }
    return a + b;
}
```
- try代码块抛出一个异常，控制权就会跳转到他的catch
```
var try_it = fun (){
    try{
        add("AA");
    } catch (e){
        document.writeln(e.name+':'+e.message);
    }
}
try_it();
```
## 给类型增加方法
> Object.prototype添加方法，对函数,数组，字符串，数字，正则表达式和布尔值同样适用
```
fun.prototype.method = fun(name,func){
    this.protoype[name] = func;
    return this;
};
```
## 递归
- 神仙用法
- 尾递归优化
## 作用域

## 闭包
## 回调
```
request = prepare_the_request ();
response = send_request_synchronously( request );
display ( response );
```
> 效果更好
```
request = prepare_the_request ();
send_request_synchronously ( request , fun( response ){
        display ( response );}
);
```
## 模块
- ？？？
## 级联
- 单独的一条语句依次调用同一个对象的很多方法
- obj().xx().xxx().xxxx().....;
## 套用
- 将函数与传递给ta的参数结合去产生一个新的函数
```
var add1 = add.curry(1);
document.writeln(add1(6));
```
## 记忆
- ？？？




=======
# ***chapter 4***
## 对象  
## 函数字面量
     保留字function
     var add = function(a,b){
        return a+b;
    }; 
## 调用
- 方法调用模式  

    > myObj有一个value属性和一个increment方法
    ``` 
    var myObj = {  
        value: 0;  
        increment: fun(inc){  
            this.value += typeof inc === 'number' ? inc:1;  
        }  
    };  
    myObj.increment();  
    document.writeln(myObk.value);  //1  
    ```
- 函数调用模式

    > 函数调用时，this被绑定到全局对象，解决方法就是：定义变量赋值为this
    ``` 
    myObj.dou =fun() {
        var that = this; //解决方法
        var helper = fun(){
            that.value = add(that.value,that.value);
        };  
        helper(); //以函数的形式调用  
    };  

    //以方法的形式调用dou
    myObj.dou();
    ```

- 构造器调用模式
    > 不太推荐使用
    ```
    //创造一个Q的构造器函数
    var Q = fun(string){
        this.status = string;
    };

    //给Q所有实例提供一个get_status方法
    Q.prototype.get_status = fun(){
        return this.status;
    };

    //构造一个Q实例
    var myQ = new Q("KKKK");
    ```


- apply调用模式
    > apply方法接受俩个参数，1.this 2.一个参数数组
    ```
    var array = [3,4];
    var sum = add.apply(null,array);  //7
    var statusObj = {
        status: 'AAA';
    };

    //statusObj没有继承Q.prototype,但是可以在statusObj上调用get_status方法
    var ststus = Q.prototype.get_status.apply(statusObj); //AAAA 
    ```

## 参数
- 函数被调用时，会得到arguments数组，但ta不是一个真正的数组，只有一个length属性，缺少所有数组的方法

## 返回
- return
## 异常
```
var add = fun(a,b){
    if(typeof a!== 'number' || typeof b!== 'number'){
        throw{
            name:'TypeError',
            message:'add needs numbers'
        };
    }
    return a + b;
}
```
- try代码块抛出一个异常，控制权就会跳转到他的catch
```
var try_it = fun (){
    try{
        add("AA");
    } catch (e){
        document.writeln(e.name+':'+e.message);
    }
}
try_it();
```
## 给类型增加方法
> Object.prototype添加方法，对函数,数组，字符串，数字，正则表达式和布尔值同样适用
```
fun.prototype.method = fun(name,func){
    this.protoype[name] = func;
    return this;
};
```
## 递归
- 神仙用法
- 尾递归优化
## 作用域

## 闭包
## 回调
```
request = prepare_the_request ();
response = send_request_synchronously( request );
display ( response );
```
> 效果更好
```
request = prepare_the_request ();
send_request_synchronously ( request , fun( response ){
        display ( response );}
);
```
## 模块
- ？？？
## 级联
- 单独的一条语句依次调用同一个对象的很多方法
- obj().xx().xxx().xxxx().....;
## 套用
- 将函数与传递给ta的参数结合去产生一个新的函数
```
var add1 = add.curry(1);
document.writeln(add1(6));
```
## 记忆
- ？？？




>>>>>>> 3060b42 (第一次Git提交所有文件)
