- typescript 是 js 的超集

  - ts 可以提供 **`类型化`** 的 js
    ```ts
    let colin: prison;
    ```

- 如何使用 ts 完成子组件 UI 开发

  1. 后缀为.tsx
  2. prop-types 可以下课了 GG
     - 语言本身来打理
  3. 子组件接住父组件的 props 传递
     - 接口 interface 子组件里面定义
     - **ts 提供的高级面向对象功能 传统的面向对象思想**
  4. HelloComponent:React.FC\<Props> (`:`类型约束；`< >`泛型，泛指内部的类型)
  5. ts 如 java 先编译 再运行的 c .o .exe
     - js node 1.js 脚本语言

- change 事件的 typescript 化
  1. e:React.ChangeEvent\<HTMLInputElement>  来自 @types/react
  2. 子组件向父组件 报告 调用函数，
  3. 父组件接受子组件传过来的value
   - 子组件 onChange 语义改为 onNameUpdated 中转一下

- typescript 架构中多了一个model