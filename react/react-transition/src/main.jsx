/*
 * @Date         : 2022-06-09 19:15:34
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-09 21:54:57
 * @description  : 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
