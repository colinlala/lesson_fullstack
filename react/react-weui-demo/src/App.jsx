/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-01 10:54:23
 * @LastEditTime: 2022-06-01 13:24:42
 * @Description: 
 */
import { useState, useEffect } from 'react'
import List from './List'
import axios from 'axios'
// react 组件框架
import WeUI from 'react-weui'

const {
  Toast,
  Panel,
  PanelHeader,
  PanelBody
} = WeUI


// 2s+   添加loading...效果，list显示出来
// fast mock 比 json-server更专业
// const Loading = () => {
//   return (
//     <>
//       加载中...
//     </>
//   )
// }


function App() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  // 数据请求放到父组件里面 APP自有的状态，方便管理，多个组件共享
  useEffect(() => {
    axios
      .get('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/booklist')
      .then(res => {
        // console.log(data)
        if (res.data) {  // 安全些
          setList(res.data);
          setLoading(false);
        } else {
          console.log('出问题了...')
        }
      })
  }, [])
  return (
    <Panel>
      <PanelHeader>
        图书列表
      </PanelHeader>
      <PanelBody>
        {/* <button className='weui-btn weui-btn_primary'>按钮</button> */}
        <Toast show={loading} icon="loading">加载中</Toast>
        {
          list.length > 0 && <List data={list} />
        }
      </PanelBody>
    </Panel>
  )
}

export default App
