- any （不想努力了）
- keyof Color 某一个值的范围            enum

- typescript 有何魅力？
    1. 增强语言能力
        - interface 泛型 type keyof 
        - 强类型
    2. 编译能力
        - 边写边编译
    3. 代码建议
    4. 开发更快
        - 多写了代码 ，少bug
        - 减少了调试时间，改bug时间
    5. 有很多现成的类型定义文件 @types/react ...

- typescript 怎么取巧？
    1. any
    2. 快速修复一下

- api typescript 比较复杂
    1. api 使命是返回数据的，符合模型的定义
        - 根据table 来定义
    2. 每个模块对应一个table model 模型定义文件 interface
    3. 接口->异步的，返回的是一个Promise对象
        - :Promise\<MemberEntity[]> 每处Promise都得写清楚

- 封装了一个hooks 函数
    1. 每一个hooks 都有使命
    2. useEffect useState react 内置
    3. useNavigate react-router-dom 内置
    4. 封装useMemberCollection函数
    5. 状态声明（useState） 和接口请求 封装到内部去了 