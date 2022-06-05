/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 10:03:03
 * @LastEditTime: 2022-06-04 11:33:03
 * @Description: 
 */
import { useState } from 'react'
import './App.css'
import 'weui'
import 'react-weui/build/packages/react-weui.css'
import User from './User'
import Address from './Address'
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      {/* 不用a标签，转跳到user页面 */}
      <Link to="/user">用户</Link>
      {/* <User /> */}
      {/* 先有路由 -> 再有组件， 路由配置 */}
      <Routes>
        <Route path="/user" element={<User />}></Route>
        <Route path="/address" element={<Address />}></Route>
      </Routes>
    </div>
  )
}

export default App
