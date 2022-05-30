/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 19:12:09
 * @LastEditTime: 2022-05-28 21:01:40
 * @Description: 
 */
import { useState, useEffect } from 'react'
import Header from './Header'
import Loader from './Loader'
import Results from './Results'
import axios from 'axios'

function App() {
  // 数据驱动的界面
  const [beers, setBeers] = useState([]);
  // loading自有状态，进度条效果？
  const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   // 优先显示组件，延后加载数据
  //   (async function () {
  //     // json-server  早期用的        现在使用fastmock在线接口伪造工具
  //     // fastmock 的接口     api调用
  //     const res = await fetch('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/list');
  //     const data = await res.json();
  //     setBeers(data.beers);
  //     setloading(false);
  //   })();
  // }, [])



  // 使用axios  fetch过于底层
  useEffect(() => {
    // 优先显示组件，延后加载数据
    (async function () {
      // json-server  早期用的        现在使用fastmock在线接口伪造工具
      // fastmock 的接口     api调用
      const data = await axios.get('https://www.fastmock.site/mock/d42a33041be6d65c4184abbecade8d1c/beers/list');

      // const data = await res.json();
      // console.log(data, '----------------------')
      // data被包了一层(data) ，所以要data.data
      setBeers(data.data.beers);
      setloading(false);
    })();
  }, [])

  return (
    <div className="wrapper">
      {/* 组件化思维，状态思维？ */}
      {/* 非自有的props 其实让组件更好的复用、协作 */}
      <Header siteName="Beer me!" />
      {/* 有可能出现，有可能不出现，状态组件，页面动态的一种状态 */}
      {
        loading && <Loader message="正在加载啤酒列表..." />
      }
      <Results beers={beers} loading={loading} />
    </div>
  )
}

export default App
