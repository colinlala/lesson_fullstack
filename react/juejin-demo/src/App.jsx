import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import User from './User'
import Detail from './Detail'
import Home from './Home'
// import UserPosts from './UserPosts'


function App() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // 1.
      // 过两秒url改变  但是内容没有展现，enter一下才出现
      // history.pushState(null, null, '/post/123456789')

      // 2. 
      // js 转跳 BOM 原始
      // 过两秒url改变，并且内容展现，实现了真正意义上的跳转
      // window.location.href = '/post/123456789'

      // 3. 
      // react hooks 的跳转函数 useNavigate
      navigate('/post/123456789')
    }, 2000)
  }, [])
  return (
    <div className="App">
      <nav>
        {/* 两种url */}
        <Link to="/post?id=987654321">文章?</Link>
        <Link to="/post/123456789">文章</Link>
        <Link to="/user">用户</Link>
        {/* <Link to="/user/123456789/posts">文章列表</Link> */}
      </nav>


      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Detail />} />
        <Route path="/post/:id" element={<Detail />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/user/:id/posts" element={<UserPosts />} /> */}
      </Routes>
    </div>
  )
}

export default App
