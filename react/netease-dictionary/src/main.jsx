import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/reset.css'
import { BrowserRouter } from 'react-router-dom'
// 做自适应
import './modules/rem'
// 幻灯片
import 'swiper/dist/css/swiper.min.css'
// inconfont
import './assets/fonts/iconfont.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
