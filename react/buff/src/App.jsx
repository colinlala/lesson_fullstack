import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Find from './pages/Find'
import Repertory from './pages/Repertory'
import Sell from './pages/Sell'
import Mine from './pages/Mine'


function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/repertory' element={<Repertory />}></Route>
        <Route path='/find' element={<Find />}></Route>
        <Route path='/mine' element={<Mine />}></Route>
        <Route path='/sell' element={<Sell />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
