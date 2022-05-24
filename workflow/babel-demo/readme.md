<!--
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 19:14:29
 * @LastEditTime: 2022-05-23 20:07:00
 * @Description: 
-->
# babel js的编译器

- npm install @babel/cli @babel/core @babel/preset-env --save-dev

1. @babel/cli  babel的命令行工具
2. @babel/core  babel转义的核心
3. @babel/preset-env  + .babelrc 代码的预处理
4. --save-dev 开发依赖

- 终端输入 
    ```
    .\node_modules\.bin\babel 1.js -o es5.js
    ```  
    转适合es5的文件