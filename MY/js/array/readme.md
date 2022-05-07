<<<<<<< HEAD
##  创建数组

    ```
    var BAT = ['Alibaba', 'Tencent', 'Baidu'];
    var students = [{name : 'Bosn', age : 27}, {name : 'Nunnly', age : 3}];
    var arr = ['Nunnly', 'is', 'big', 'keng', 'B', 123, true, null];
    var arrInArr = [[1, 2], [3, 4, 5]];
    var commasArr1 = [1, , 2]; // 1, undefined, 2


    var arr = new Array(); 
    var arrWithLength = new Array(100); // undefined * 100
    var arrLikesLiteral = new Array(true, false, null, 1, 2, "hi");
    // 等价于[true, false, null, 1, 2, "hi"];


    ```
- var arr = new Array(); 这个new可以省略




## 数组元素

- 动态的，无需指定大小。

    1. arr.unshift()：头部添加
    2. arr.push:头部添加
    3. delete arr[]:删除某个元素
    4. arr.pop()、arr.length -= 1: 删除尾部元素
    5. arr.shift():删除头部元素


## 稀疏数组

- 稀疏数组并不含有从0开始的连续索引。一般length属性值比实际元素个数大。

    ```
    var arr1 = [undefined];
    var arr2 = new Array(1);
    0 in arr1; // true
    0 in arr2; // false
    arr1.length = 100;
    arr1[99] = 123;
    99 in arr1; // true
    98 in arr1; // false
    ```



## 数组方法

1. Array.prototype.join()将数组转为字符串
    ```
    var arr = [1, 2, 3];
    arr.join(); // "1,2,3"
    arr.join("_"); // "1_2_3"

    ```
2. Array.prototype.reverse()将数组逆序
    > 原数组被修改
        ```
        var arr = [1, 2, 3];
        arr.reverse(); // [3, 2, 1]
        arr; // [3, 2, 1]
        ```
3. Array.prototype.sort()排序
    > 原数组被修改
    - 好像中文也会被排序?

4. Array.prototype.concat()数组合并
    ```
    var arr = [1, 2, 3];
    arr.concat(4, 5); // [1, 2, 3, 4, 5]
    arr; // [1, 2, 3]原数组不变
    arr.concat([10, 11], 13); // [1, 2, 3, 10, 11, 13]
    // 默认合并一层
    arr.concat([1, [2, 3]]); // [1, 2, 3, 1, [2, 3]]
    ```

5. Array.prototype.slice()返回部分数组
    > 参数为负数，arr.length+负数。结果还是负数则为0.
        ```
        var arr = [1, 2, 3, 4, 5];
        arr.slice(1, 3); // [2, 3]
        arr.slice(1); // [2, 3, 4, 5]
        arr.slice(1, -1); // [2, 3, 4]
        arr.slice(-4, -3); // [2]
        ```

6. Array.prototype.splice()数组拼接
    > 原数组被修改
        ```
        var arr = [1, 2, 3, 4, 5];
        arr.splice(2); // returns [3, 4, 5]
        arr; // [1, 2];

        arr = [1, 2, 3, 4, 5];
        arr.splice(2, 2); // returns [3, 4]
        arr; // [1, 2, 5];

        arr = [1, 2, 3, 4, 5];
        arr.splice(1, 1, 'a', 'b'); // returns [2]
        arr; // [1, "a", "b", 3, 4, 5]
        ```
7. Array.prototype.every & some()数组判断

    ```
    var arr = [1, 2, 3, 4, 5];
    arr.every(function(x) {
        return x < 10;
    }); // true

    var arr1 = [1, 2, 3, 4, 5];
    arr1.some(function(x) {
        return x === 3;
    }); // true
    arr.some(function(x) {
        return x === 100;
    }); // false

    ```



=======
##  创建数组

    ```
    var BAT = ['Alibaba', 'Tencent', 'Baidu'];
    var students = [{name : 'Bosn', age : 27}, {name : 'Nunnly', age : 3}];
    var arr = ['Nunnly', 'is', 'big', 'keng', 'B', 123, true, null];
    var arrInArr = [[1, 2], [3, 4, 5]];
    var commasArr1 = [1, , 2]; // 1, undefined, 2


    var arr = new Array(); 
    var arrWithLength = new Array(100); // undefined * 100
    var arrLikesLiteral = new Array(true, false, null, 1, 2, "hi");
    // 等价于[true, false, null, 1, 2, "hi"];


    ```
- var arr = new Array(); 这个new可以省略




## 数组元素

- 动态的，无需指定大小。

    1. arr.unshift()：头部添加
    2. arr.push:头部添加
    3. delete arr[]:删除某个元素
    4. arr.pop()、arr.length -= 1: 删除尾部元素
    5. arr.shift():删除头部元素


## 稀疏数组

- 稀疏数组并不含有从0开始的连续索引。一般length属性值比实际元素个数大。

    ```
    var arr1 = [undefined];
    var arr2 = new Array(1);
    0 in arr1; // true
    0 in arr2; // false
    arr1.length = 100;
    arr1[99] = 123;
    99 in arr1; // true
    98 in arr1; // false
    ```



## 数组方法

1. Array.prototype.join()将数组转为字符串
    ```
    var arr = [1, 2, 3];
    arr.join(); // "1,2,3"
    arr.join("_"); // "1_2_3"

    ```
2. Array.prototype.reverse()将数组逆序
    > 原数组被修改
        ```
        var arr = [1, 2, 3];
        arr.reverse(); // [3, 2, 1]
        arr; // [3, 2, 1]
        ```
3. Array.prototype.sort()排序
    > 原数组被修改
    - 好像中文也会被排序?

4. Array.prototype.concat()数组合并
    ```
    var arr = [1, 2, 3];
    arr.concat(4, 5); // [1, 2, 3, 4, 5]
    arr; // [1, 2, 3]原数组不变
    arr.concat([10, 11], 13); // [1, 2, 3, 10, 11, 13]
    // 默认合并一层
    arr.concat([1, [2, 3]]); // [1, 2, 3, 1, [2, 3]]
    ```

5. Array.prototype.slice()返回部分数组
    > 参数为负数，arr.length+负数。结果还是负数则为0.
        ```
        var arr = [1, 2, 3, 4, 5];
        arr.slice(1, 3); // [2, 3]
        arr.slice(1); // [2, 3, 4, 5]
        arr.slice(1, -1); // [2, 3, 4]
        arr.slice(-4, -3); // [2]
        ```

6. Array.prototype.splice()数组拼接
    > 原数组被修改
        ```
        var arr = [1, 2, 3, 4, 5];
        arr.splice(2); // returns [3, 4, 5]
        arr; // [1, 2];

        arr = [1, 2, 3, 4, 5];
        arr.splice(2, 2); // returns [3, 4]
        arr; // [1, 2, 5];

        arr = [1, 2, 3, 4, 5];
        arr.splice(1, 1, 'a', 'b'); // returns [2]
        arr; // [1, "a", "b", 3, 4, 5]
        ```
7. Array.prototype.every & some()数组判断

    ```
    var arr = [1, 2, 3, 4, 5];
    arr.every(function(x) {
        return x < 10;
    }); // true

    var arr1 = [1, 2, 3, 4, 5];
    arr1.some(function(x) {
        return x === 3;
    }); // true
    arr.some(function(x) {
        return x === 100;
    }); // false

    ```



>>>>>>> 3060b42 (第一次Git提交所有文件)
