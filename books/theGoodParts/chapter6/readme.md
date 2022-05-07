<<<<<<< HEAD
# 数组
## 数组字面量
    ```
    var number = [
        '1','2','3','4','5'
    ]
    var nmberObj = {
        'one':'1',
        'two':'2',
        'three':'3',
        'four':'4',
        'five':'5'
    };
    ```
- number有length属性，numberObj没有
- JavaScript允许数组包含***任意混合类型***的值  
    ```
    var m =[
        'string',98.2,true,null,undefined,['nested','array'],{object:true},NaN,Infinity
    ];
    ```
## 长度
- Javascript数组的length没有上界。
    > 用大于或等于length的数字作为下标保存的一个元素，会增大length，并且不会报错。
    ```
    var myarr = [];
    myarr[100] = true;
    myarr.length;  //1001
    //只包含一个属性
    ```
## 删除
- JavaScript的数组是对象，所以可以用delete移除数组元素
    ```
    delete number[2];
    ```
    > 于是--->["1", "2", empty, "4", "5"]留下了个undefined
- 而splice(a,b)方法可以删除元素并且替换,a数组中的序号，b是删除元素的个数
    > 效率不高

## 枚举
- *for in*无法保证属性的顺序，可能从原型链中得到意外属性的问题
- *for*语句就避免了这些问题，和C语言一样的用法

## 混淆的地方
- 对象与数组的选择：当属性名是小而连续的整数时，应该使用数组。否则，使用对象。JS本身对数组和对象的区别是混乱的。typeof运算符报告数组的类型是'object'，这没有任何意义。

## 方法
-  Array.prototype：可以通过Array.prototype给数组扩充方法。
## 维度
- JS数组通常不会预置值。如果你用[]得到一个新数组，它将是空的。如果你访问一个不存在的元素，得到的值则是undefined。JS应该提供为数组指定初始值的方法，但我们可以弥补这个疏忽：
    ```
    Array.dim = function(dimension, initial){
        var a = [], i;
        for(i=0; i<dimension; i++){
        a[i] = initial;
        }
        return a;
    };
    //创建一个包含10个0的数组
    var myArray = Array.dim(10, 0);
    ```
- 多维数组：JS没有多维数组，但就像大多数类C语言一样，它支持元素为数组的数组：
    ```
    var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
    ];
    matrix[2][1]; //7
    //注意：Array.dim(n, [])在这里不能工作，如果使用它，每个元素都指向同一个数组的引用，后果不堪设想
    ```
- 初始化多维数组：一个空的矩阵每个单元都会拥有一个初始值undefined。
    ```
    Array.matrix = function(m, n, initial){
        var a, i, j, mat=[];//由于JS变量作用域问题，将变量在函数体最前面声明。
        for(i=0; i<m; i++){
        a = [];
        for(j=0; j<n; j++){
            a[j] = initial;
        }
        mat[i] = a;
        }
        return mat;
    };
    //构造一个用0填充的4X4矩阵
    var myMatrix = Array.matrix(4, 4, 0);
    document.writeln(myMatrix[3][3]);   //0
    ```
=======
# 数组

## 数组字面量

    ```
    var number = [
        '1','2','3','4','5'
    ]
    var nmberObj = {
        'one':'1',
        'two':'2',
        'three':'3',
        'four':'4',
        'five':'5'
    };
    ```
- number有length属性，numberObj没有
- JavaScript允许数组包含***任意混合类型***的值  
    ```
    var m =[
        'string',98.2,true,null,undefined,['nested','array'],{object:true},NaN,Infinity
    ];
    ```


## 长度

- Javascript数组的length没有上界。
    > 用大于或等于length的数字作为下标保存的一个元素，会增大length，并且不会报错。
    ```
    var myarr = [];
    myarr[100] = true;
    myarr.length;  //1001
    //只包含一个属性
    ```


## 删除

- JavaScript的数组是对象，所以可以用delete移除数组元素
    ```
    delete number[2];
    ```
    > 于是--->["1", "2", empty, "4", "5"]留下了个undefined
- 而splice(a,b)方法可以删除元素并且替换,a数组中的序号，b是删除元素的个数
    > 效率不高



## 枚举

- *for in*无法保证属性的顺序，可能从原型链中得到意外属性的问题
- *for*语句就避免了这些问题，和C语言一样的用法



## 混淆的地方

- 对象与数组的选择：当属性名是小而连续的整数时，应该使用数组。否则，使用对象。JS本身对数组和对象的区别是混乱的。typeof运算符报告数组的类型是'object'，这没有任何意义。



## 方法

-  Array.prototype：可以通过Array.prototype给数组扩充方法。



## 维度

- JS数组通常不会预置值。如果你用[]得到一个新数组，它将是空的。如果你访问一个不存在的元素，得到的值则是undefined。JS应该提供为数组指定初始值的方法，但我们可以弥补这个疏忽：
    ```
    Array.dim = function(dimension, initial){
        var a = [], i;
        for(i=0; i<dimension; i++){
        a[i] = initial;
        }
        return a;
    };
    //创建一个包含10个0的数组
    var myArray = Array.dim(10, 0);
    ```
- 多维数组：JS没有多维数组，但就像大多数类C语言一样，它支持元素为数组的数组：
    ```
    var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
    ];
    matrix[2][1]; //7
    //注意：Array.dim(n, [])在这里不能工作，如果使用它，每个元素都指向同一个数组的引用，后果不堪设想
    ```
- 初始化多维数组：一个空的矩阵每个单元都会拥有一个初始值undefined。
    ```
    Array.matrix = function(m, n, initial){
        var a, i, j, mat=[];//由于JS变量作用域问题，将变量在函数体最前面声明。
        for(i=0; i<m; i++){
        a = [];
        for(j=0; j<n; j++){
            a[j] = initial;
        }
        mat[i] = a;
        }
        return mat;
    };
    //构造一个用0填充的4X4矩阵
    var myMatrix = Array.matrix(4, 4, 0);
    document.writeln(myMatrix[3][3]);   //0
    ```
>>>>>>> 3060b42 (第一次Git提交所有文件)
