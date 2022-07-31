- ts + node + react 数据流
- ts + react 前端
    1. component    React.FC<{}>
    2. model  interface   member
    3. api     Promise<MemberEntity[]>
        - axios = 一统前端异步请求库  =  ajax(XMLHTTPRequest) | fetch(兼容node-fetch) | ... 
    4. redux   AnyAction rooState

- 如何将axios + ts 加入react 前端开发流程
    1. 标准且数据严格的接口开发规范
    2. 安装axios    response: AxiosResponse
    3. ` {data}: AxiosResponse<MemberEntity[]> `
    4. baseURl + 数据拦截（请求响应拦截）
    5. ` Promise<MemberEntity[]> `   ` new Promise<MemberEntity[]> `
    6. 转义函数达到目的
    7. 参数类型 `: AxiosResponse<MemberEntity[]> ` 拿到结果map一下
    - 所有的接口都按这个套路，一个接口 + 一个转义方法

- 自定义hooks
    1. 顶级大厂react 必考面试题之一
    2. useMemberCollection 把之前 useState + useEffect + api 直接调用
        - 封装成为，只关注 MemberCollection 数据本身的能力
    3. 不用管api 是什么，不用管model是什么，useMEmberCollection搞定了
    4. 数据展示的业务
        - axios + typescript + useMemberCollection  对member业务负责的人
        - useMemberCollection()  对使用者暴露非常简单的使用接口