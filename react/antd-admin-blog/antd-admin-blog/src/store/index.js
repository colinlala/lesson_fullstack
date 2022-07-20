import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// 仓库
// process.env 拿到当前运行环境 
const store = 
    process.env.NODE_ENV === 'development'
        ? createStore(reducers, composeWithDevTools())
        : createStore(reducers)
export default store;
 