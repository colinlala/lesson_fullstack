/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 16:20:45
 * @LastEditTime: 2022-05-28 21:02:51
 * @Description: 
 */
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([])
  // jsx首屏显示，不会受数据请求的阻塞
  useEffect(() => {
    // console.log('-------------')
    // fetch('http://localhost:1234/posts')
    //   .then(data => data.json())
    //   .then(data =>
    //     // console.log(data);
    //     setPosts(data)
    //   )

    // 提升
    (async function () {
      const res = await fetch('http://localhost:1234/posts');
      const data = await res.json();
      // console.log(data);
      setPosts(data);
    })();
  }, [])
  return (
    <div className="App">
      {
        !posts.length && <div>正在加载中...</div>
      }
      {
        posts.length && posts.map(post => <li key={post.div}>{post.title}</li>)
      }
    </div>
  )
}

export default App
