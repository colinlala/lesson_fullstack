- npm i babel-loader - `babel-loader`：在webpack里应用 babel 解析ES6的桥梁

- npm i @types/react @types/react-dom --save-dev
    - 类型声明文件

- `tsconfig.json`是ts编译器的配置文件，ts编译器可根据它的信息来对代码进行编译
    1. `include`:用来指定哪些ts文件需要被编译
    2. `exclude`:不需要被编译的目录
    3. `compilerOptions`:编译器选项
        1. `target`:用来编译成指定的es版本的js;
        2. `module`:指定模块化规范;
        4. `noImplicitAny`:是否默认禁用 any
        5. `noImplicitAny1`:是否默认禁用 any
        8. `jsx`:指定jsx代码用于的开发环境
        3. lib指定项目中要用的库;
        4. outDir编译后文件的所在目录；
        5. outFile:将编译后的文件合并成一个js，设置outfile后所有的全局作用域中的额代码会合并到同一个文件中
        “strict”:所有严格检查的总开关,开启时候以下检查都默认为true
        "allowJs"是否对js进行编译，默认为false
        "checkjs"是否检查js是否符合语法规范，默认为false
        “removeComments"编译时候是否移除注释
        “noEmit”:不生成编译后的文件
        “noEmitOnError”:当有错误时候不生成编译后的文件”
        “alwaysStrict”：编译后的文件是否使用严格模式
        “noImplicitAny”:是否允许使用隐式的any类型
        “noImplicitThis”:是否允许使用不明确的this
        “strictNullChecks”:严格检查空值

- `webpack.config.js` 工程化配置文件



1. react + ts = 终极
    - js因为类型问题，随意，容易出错
    - ts 是 js 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。
        - **类型约束**（App :React.FC<{}>）
    - 文件后缀 .jsx -> .tsx
        - babel-loader进行转义
    - .babelrc ，@babel/preset-typescript
    - App :React.FC<{}> 声明 App是react的函数组件