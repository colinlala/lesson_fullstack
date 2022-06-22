import React,{ lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Home from '../pages/Home'
import Home from '../pages/Home'
const Movie = lazy(() => import('../pages/Movie'))
const Study = lazy(() => import('../pages/Study'))
const Translate = lazy(() => import('../pages/Translate'))
const Vip = lazy(() => import('../pages/Vip'))


export default function RoutesConfig() {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/movie' element={<Movie />}></Route>
        <Route path='/study' element={<Study />}></Route>
        <Route path='/translate' element={<Translate />}></Route>
        <Route path='/vip' element={<Vip />}></Route>
    </Routes>
  )
}