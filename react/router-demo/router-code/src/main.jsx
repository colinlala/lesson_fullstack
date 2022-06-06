/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-06 19:29:36
 * @LastEditTime: 2022-06-06 20:14:55
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 1. BrowserRouter 路由组件
//    react-router-dom 路由组件库
// 2. 可以给我们的应用添加路由
// import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(

  // 多了一个/#
  <HashRouter>
    <App />
  </HashRouter>

  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)
