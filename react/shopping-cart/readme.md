- 购物车里的商品数据，怎么打理？
    1. 从商品详情页 购买
    2. 请求出来
    3. 写死  数组

- `npm i redux-thunk redux-logger`    `redux-logger`使得redux调试更优秀

1. 写死购物车数据，简化
2. 购物车模块 reducer 设计


购物车
- redux 大一点的项目 数据管理
    - 财务  数据统计不能出错   算账的技巧

- redux核心使命 把数据管理好
    1. 计算正确  初始状态  + reducer 重新运算  和页面状态正确对应 MVVM
    2. 所有状态  留下来， 不用被应用式赋值影响，便于 react-dev-tool logger
        - **redux的状态迁移是可以被追溯的**
        1.  旧写法
            ```js
                {
                    ...state,
                    list:
                }
            ```
        2. 新写法
            ```js
                Object.assign({}, state, { list: [...list]});   
            ```
- reducer 设计完成 store 就基本完成了
    - 财务数据管理
    1. 提供商品的默认值  default
        - 商品，添加到购物车 check:true
    2. 选中 不选 case CHECK_GOODS
        - goodId
        - 不选 -> 选中 goodsNum = 1
    3. CHECK_GOODS_NUM
        - goodsId status 不好分析
        - 一直减到 0 ，就 check 为 false
    4. CHECK_ALL_GOODS
        
- diff  
    - 新旧空间的差异  diff  
    - HTTP Method 修改一部分使用 PATCH


- **react-thunk中间件，react和UI间有中间件。组件向数据层connect，一定要经过中间件。组件通过生命周期去触发一个获取商品的一个异步的action，那么中间件在发送请求数据的时候会接住请求，为异步的action的添加react-thunk的能力，让store中的异步得以运行**