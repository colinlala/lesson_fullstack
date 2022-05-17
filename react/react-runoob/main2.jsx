/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-17 19:14:10
 * @LastEditTime: 2022-05-17 20:19:16
 * @Description:  
 */
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// root节点 ，叫做根节点？
// root节点范围内react起作用
// html -> js
// JSX js的扩展语法，只能在react中可以生效，简单方便
// React 用来表达UI组件
// JSX className是class。JSX 模板
// let name = '解封';
// const element = <h1 className="z-bd">Hello,{name}!</h1>;
// // 自定义组件
// const Hello = () => {
//   // JSX
//   return <div>hello {name}</div>
// }

// Proxy  react已经封装了

let datastr = new Date().toLocaleTimeString();
setInterval(() => {
  datastr = new Date().toLocaleTimeString();
}, 1000)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // element
  // <Hello></Hello>

  // UI 大舞台

  <div>
    {/* 在外面要加父元素 */}
    <h1>Hello,world!</h1>
    <h2>现在是 {datastr}</h2>
  </div>


)
