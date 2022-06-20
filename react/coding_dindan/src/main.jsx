/*
 * @Date         : 2022-06-16 14:50:53
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:12:47
 * @description  : 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'
import './assets/styles/reset.css'
import { BrowserRouter } from 'react-router-dom'
// font-awesome引入图标字体库
import 'font-awesome/css/font-awesome.min.css'
// inconfont
// import './assets/font/iconfont.css'
// 做自适应
import './modules/rem'
// 幻灯片
import 'swiper/dist/css/swiper.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)