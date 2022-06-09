/*
 * @Date         : 2022-06-08 15:14:57
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-08 20:33:36
 * @description  : 
 */
// API 应用程序接口 Application Interface

// 前端请求一个url get /todos   后端负责在/todos 提供todos 数据
// 前端和后端的数据交换格式是json

const todos = [
    // todo
    {
        id: 1,
        text: 'todo1',
        finished: true
    },
    {
        id: 2,
        text: 'todo2',
        finished: false
    },
    {
        id: 3,
        text: 'todo3',
        finished: true
    },
    {
        id: 4,
        text: 'todo4',
        finished: true
    },
    {
        id: 5,
        text: 'todo5',
        finished: false
    },
    {
        id: 6,
        text: 'todo6',
        finished: true
    },
    {
        id: 7,
        text: 'todo7',
        finished: false
    },
    {
        id: 8,
        text: 'todo8',
        finished: true
    }
]

// delay函数
const delay = time => new Promise(resolve => setTimeout(resolve, time));
// withDelay (function() {})  return async 函数
const whitDelay = fn => async (...args) => {
    await delay(1000);
    return fn(...args)
}

// withDelay(function () { })()

export const fetchTodos = whitDelay(params => {
    // console.log(params)
    const { query, tab } = params
    // console.log(query,tab)
    let result = todos;
    if (tab) {
        switch (tab) {
            case "已完成":
                result = result.filter(todo => todo.finished === true)
                break;
            case "未完成":
                result = result.filter(todo => todo.finished === false)
                break;
            default:
                break;
        }
    }
    if (query) {
        result = result.filter(todo => todo.text.includes(query))
    }
    // Promise 类     resolve 静态方法
    // Promise.resolve  返回一个fulfilled的promise实例
    // 一般用于 返回结果的promise化
    return Promise.resolve({
        tab, result
    })
})