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
import store from './store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
)
