# 变量提升

- 逐行运行

    代码的阅读习惯是一样的   编写+阅读 == 运行顺序（有时候不等于）
    执行栈  运行的负责人
    全局作用域 （全局变量+函数的声明和运行）+ 函数为单位（执行权的交接，作用域的保护和正常运行）

- 编写顺序和执行顺序不一样？
    异步 等
    1. fetch 异步
        耗时
        立即执行的 先去执行

    2. 定时器
    3. 普通事件
    4. I/O操作  Input/Output
        硬盘  速度慢   空间大
        cpu   计算的
        内存  速度块   空间小