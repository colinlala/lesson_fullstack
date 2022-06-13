/*
 * @Date         : 2022-06-13 19:10:48
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-13 21:24:29
 * @description  : 
 */
import { useState, useEffect } from 'react'
import './App.css'
import classnames from 'classnames'
import WeUI from 'react-weui'
import Contest from './components/contest'
// 数据请求一般放在这里
import { getContestData } from './api/request'
const {
  Toast
} = WeUI



function App() {
  const [tab, setTab] = useState('all')
  // 数据列表
  const [list, setList] = useState([])
  // 设置加载的图标 状态
  const [showLoading, setShowLoading] = useState(false)
  // const [tabClasses, setTabClasses] = useState(['item'])
  const tabClasses = ['item']

  useEffect(() => {
    setTimeout(() => {
      setTab('dj')    // 2s 后tab设置为dj
      // showLoading(true)   // 
    }, 2000)
  })


  // 更新
  useEffect(() => {
    // console.log('----------')  // 挂载的时候输出一次  ， 状态改变后再次输出
    // setShowLoading(true)
    (async () => {
      setShowLoading(true)
      let {data} = await getContestData()
      setList([...data])
      setShowLoading(false)
    })()


    // fetch('https://www.fastmock.site/mock/759aba4bef0b02794e330cccc1c88555/beers/match')
    //   .then(data => data.json())
    //   .then(data => {
    //     // console.log(data)
    //     // setList([...data])
    //     // setShowLoading(false)
    //   })


    // 更新className tabClasses为状态时
    // setTabClasses([
    //   ...tabClasses,
    //   'current'
    // ])

  }, [tab])// 先监听一下tab的改变

  // tab 切换的时候，重新写一个useEffect最好
  // useEffect(()=>{
  //   if(list.length>0){
  //     setShowLoading(false)
  //   }
  // }, [tab])
  return (
    <div className='App'>
      <Contest data={list} />
      {/* 动态输出className？ */}
      {/* <a href="#" className={tab=="all"?"current":""}>全部</a> */}
      {/* 怎么输出多个类名？ */}
      {/* tabClasses 为状态时 */}
      {/* <a href="#" className={tabClasses.join(' ')}>全部</a> */}
      {/* 还是有问题，jion后生成的是字符串 */}
      {/* <a href="#" className={tab=='all'?tabClasses.push('all').join(' '):''}>全部</a> */}

      {/* classnames 专门解决这种时候 */}
      {/* 多个classNames */}
      {/* <a href="#" className={classnames('item','current')}>全部</a> */}
      <a href="#" className={classnames('item', { current: tab == 'all' })}>全部</a>
      <Toast icon="waiting-circle" show={showLoading}>加载中...</Toast>
    </div >
  )
}

export default App
