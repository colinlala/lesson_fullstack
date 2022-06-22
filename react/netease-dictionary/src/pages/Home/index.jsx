import React, { useState, useEffect } from 'react'
import { getBanners } from '../../api/request'

import TopBar from './TopBar'
import Search from './Search'
import Banners from './Banners'


export default function Home() {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    (async () => {
        let { data: bannerData } = await getBanners()
        // let { data: resData } = await getRestaurants()
        setBanners(bannerData)
        // setRestaurants(resData)
    })()
})
  return (
    <div>
      {/* 顶部信息 */}
      <TopBar/>
      {/* 搜索栏 */}
      <Search/>
      {/* 幻灯片 */}
      <Banners banners={banners} />

    </div>
  )
}
