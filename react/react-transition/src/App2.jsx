/*
 * @Date         : 2022-06-09 19:15:34
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-09 19:42:49
 * @description  : 
 */
import { useState } from 'react'
import './App.css'
import _ from 'lodash'

function App() {
  const [value, setValue] = useState('')
  let currentValue = ''

  
  const handleChange = (e) => {
    currentValue = e.target.value;
    setValue(currentValue)
  }
  return (
    <div className="App">
      {/* <input type="text" onChange={handleChange} /> */}
      {/* 所以可以进行防抖节流设计 */}
      <input type="text" onChange={_.debounce(handleChange,300)} />
      <div>{value}</div>
      <div className="list">
        {
          // 如果参数大了，有性能问题，会卡顿
          // 所以可以进行防抖节流设计
          Array(100)
            .fill("a")
            .map((item, index) => (
              <div key={index}>{value}</div>
            ))
        }
      </div>
    </div>
  )
}

export default App
