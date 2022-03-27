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