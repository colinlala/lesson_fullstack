<<<<<<< HEAD
# The Good Parts

##  对象

### JS 数据类型
    - 简单类型
        1. 数值类型 number    JS只有数值类型，JS不太适合复杂数据运算
            JS处理小数时不够精确   eg:0.1+0.2==0.3-->FALSE（0.3000004）

        2. 字符串类型 string  ''和"" 都可以：JS不严格
        3. undefined
            - JS是弱类型语言，声明变量可以不指定具体类型
            - JS变量的类型由值决定，变量类型可变
                == 表示值相等 ===表示恒等，且类型也相等  eg：11=='11'-->true   11==='11'-->false
            - 变量声明之后，赋值之前，类型为undefined
        4. 布尔值 
            boolean true | false
        5. null


    - 复杂数据类型
        复杂的就是对象 Object  

### JS 语言关键字
    let 变量
    const 常量
    typeof 获取变量或常量数据类型
=======
# The Good Parts

##  对象

### JS 数据类型
    - 简单类型
        1. 数值类型 number    JS只有数值类型，JS不太适合复杂数据运算
            JS处理小数时不够精确   eg:0.1+0.2==0.3-->FALSE（0.3000004）

        2. 字符串类型 string  ''和"" 都可以：JS不严格
        3. undefined
            - JS是弱类型语言，声明变量可以不指定具体类型
            - JS变量的类型由值决定，变量类型可变
                == 表示值相等 ===表示恒等，且类型也相等  eg：11=='11'-->true   11==='11'-->false
            - 变量声明之后，赋值之前，类型为undefined
        4. 布尔值 
            boolean true | false
        5. null


    - 复杂数据类型
        复杂的就是对象 Object  

### JS 语言关键字
    let 变量
    const 常量
    typeof 获取变量或常量数据类型

### 对象字面量
    - 围在花括号中的多对值对，可以嵌套对象

### 检索
    - 对象.成员
    - 检索不存在的成员时，返回undefined值
    - ||填充默认值 &&避免检索到undeined值导致的TypeError异常
        eg:  var mid = stooge["big-name"] || "{no}";
             flight.pp && flight.pp.mm -->undefined (flight中没有pp成员)

### 更新
    - 通过赋值语句更新，如果有则被替换

### 引用
    - 对象通过引用传值，他们永远不会不会被拷贝？？

### 原型
    - 看不懂。。。。。(感觉就是类似于 “砖块搭房子” ，可以增加方法，也可以简化，但是不会影响原来砖块的形状)

### 反射
    - typeof确定属性的类型(number string object undefined甚至是function)
         eg： typeof flight.toString --> 'function'

    - hasOwnProperty方法 对象拥有独有的属性返回 true

### 枚举


### 删除
    - delete 对象的属性 --> 就可以删除对象中确定包含的属性，但是不会触及原型链中的对象，并且浮现出来
        eg： delete a_stooge.nickname; （原本是'DD'）
            a_stooge.nickname; --> 'BB'

### 减少全局变量污染
    - 闭包 var m = {};


>>>>>>> 3060b42 (第一次Git提交所有文件)
