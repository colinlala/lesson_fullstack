/*
 * @Date         : 2022-06-16 14:50:53
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 21:26:11
 * @description  : 
 */
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Order from './pages/Order'
import Find from './pages/Find'
import Mine from './pages/Mine'
import Cities from './pages/Cities'
import Home from './pages/Home'
import HomeDetail from './pages/HomeDetail'



function App() {
 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/find' element={<Find />}></Route>
        <Route path='/mine' element={<Mine />}></Route>
        <Route path='/cities' element={<Cities />}></Route>
        <Route path='/homedetail' element={<HomeDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
