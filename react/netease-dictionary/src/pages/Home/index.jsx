import React, { useState, useEffect } from 'react'
import { getBanners } from '../../api/request'
import TopBar from './TopBar'
import Search from './Search'
import Banners from './Banners'
import Adverte from './Adverte'
import Filter from './Filter'


export default function Home() {
  const [banners, setBanners] = useState([])
  useEffect(() => {
    (async () => {
        let { data: bannerData } = await getBanners()
        setBanners(bannerData)
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
      <Adverte />
      <Filter />

    </div>
  )
}
