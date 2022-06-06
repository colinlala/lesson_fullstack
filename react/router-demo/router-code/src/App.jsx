/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-06 19:29:36
 * @LastEditTime: 2022-06-06 19:58:17
 * @Description: 
 */
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'


function App() {


  return (
    <div className="App">
      {/* 路由配置 */}
      <nav>
        <Link to="/">
          首页
        </Link>
        <Link to="/about">
          关于
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* 关于
        首页
        详情页 */}
      </Routes>
    </div>
  )
}

export default App
