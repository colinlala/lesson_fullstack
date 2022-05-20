/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 19:14:00
 * @LastEditTime: 2022-05-20 13:05:14
 * @Description: 
 */
import { useState } from 'react'
import './App.css'
import Dog from './Dog'
import Computer from './Computer'
import Notification from './Notification'

// 封装一个Notification组件  未读信息？
function App() {
  const [num, setNum] = useState(0)
  setTimeout(() => {
    setNum(2)
  }, 1000)
  return (
    <div className="App">
      {/* <Dog></Dog> */}
      <Dog />
      <Dog />
      <Computer />
      <Computer />
      <Notification n={num} />
    </div>
  )
}

export default App
