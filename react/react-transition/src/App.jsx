/*
 * @Date         : 2022-06-09 19:15:34
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-09 22:08:02
 * @description  :
 */
import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes, Link } from 'react-router-dom'


// const Demo = () => {
//   useEffect(() => {
//     console.log('useEffect 来了， 老弟');
//     // 卸载组件的时候，运行
//     return () => {
//       console.log('useEffect 走了， 老弟');
//     }
//   })
//   return (
//     <div>
//       Demo
//     </div>
//   )
// }


const Index = () => {
  useEffect(() => {
    // 先执行，再执行App的console.log(`useEffect => You click ${count} times`) ？
    // 只有Index渲染完，整个App才能渲染完
    console.log('useEffect => 老弟，你来到Index页面')
    // Index组件卸载时，运行
    return () => {
      console.log('老弟，你离开了Index页面')
    }
  })
  return (
    <>
      Index
    </>
  )
}

const List = () => {
  return (
    <>
      List-Page
    </>
  )
}

// use react hooks
function App() {
  // const [isShow, setIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     // 过 1s 后 Demo 消失
  //     setIsShow(false)
  //   }, 1000)
  // })

  const [count, setCount] = useState(0);

  useEffect(() => {
    // 为什么会一直运行（点击）？
    // useEffect 第一次挂载的时候会运行  只要组件中有任何的状态改变都会运行
    // 添加 [count] 后 ，也是（点击）一直运行
    console.log(`useEffect => You click ${count} times`)
    // 卸载组件的时候，运行 但是App不会卸载，运行不了
    // return () => {
    //   console.log('-----------')
    // }
  }, [count])
  return (
    <div className="container">
      {/* {
        isShow && <Demo />
      } */}
      <div>
        <p>You click{count} times</p>
        <button onClick={() => setCount(count + 1)}>click me</button>
      </div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/list">列表</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </div>
  )
}

export default App;
