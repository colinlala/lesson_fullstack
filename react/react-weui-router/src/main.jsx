/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 10:03:03
 * @LastEditTime: 2022-06-04 11:21:01
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// 浏览器路由，路由这块有专门的react-router负责
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // 路由功能是需要主动开启的
  <BrowserRouter>
    {/* 根组件 */}
    <App />
  </BrowserRouter>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)
