import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import thunk, { ThunkMiddleware } from 'redux-thunk'
// window interface __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 终极解决方案
// ts as 强制类型声明 断言
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk as ThunkMiddleware) // 断言 dispatch 异步action ts -> ThunkMiddleware
    ))

// rootState state状态类型
// type interface  ts 里的类型声明
// type 自定义类型
export type rootState = ReturnType<typeof reducers>

export default store