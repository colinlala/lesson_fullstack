# 闭包
## 讲思路

- 讲概念
    1. 红宝书：闭包是指有权访问另一个函数作用域中变量的函数。
    2. MDN：闭包是指那些能够访问自由变量的函数，这里的自由变量是指外部作用域中的变量。
        - 涉及到的知识点
            - 作用域
                1. 全局作用域
                2. 局部作用域（函数作用域）
                3. 词法作用域 --> 作用域链
                4. 执行上下文

- 优缺点
    - 优点：私有化数据，在私有化数据的基础上保持数据。
        - 红宝书：任何在函数中定义的变量，都可以认为是私有变量。
        - 例子：防抖(closure.html)

            

    - 缺点：可能会导致内存泄露，内部的变量不会被自动回收掉。
        - 垃圾回收机制
            - 标记清除
            - 应用计数
            - 新生代、老生代

- 说用途
    - 防抖、节流
    - vue
    - react

