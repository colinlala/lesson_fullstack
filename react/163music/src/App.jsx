/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-18 22:16:41
 * @LastEditTime: 2022-05-18 23:26:39
 * @Description: 
 */
import { useState } from 'react'
import { GlobalStyle, Tab, TabItem } from './style'   // style.js

// styled-components styled定义一段样式  components 以组件的方式来返回
// createGlobalStyle定义一个全局样式


// console.log(GlobalStyle);

// 组件化思想   不以html的思维去看待，页面一个功能块作为一个组件来看待，这个页面分成了几个部分 section
function App() {

  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <Tab>
        <a className="selected">
          <TabItem>
            <span>推荐</span>
          </TabItem>
        </a>
        <a>
          <TabItem>
            <span>歌手</span>
          </TabItem>
        </a>
        <a>
          <TabItem>
            <span>排行榜</span>
          </TabItem>
        </a>
      </Tab>
    </div>
  )
}

export default App
