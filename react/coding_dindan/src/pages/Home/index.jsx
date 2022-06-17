/*
 * @Date         : 2022-06-16 15:01:11
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-16 20:47:43
 * @description  : 
 */
import React, { useState, useEffect } from 'react'
// import {} from './style'
import CitySelect from './CitySelect'
import { useSearchParams } from 'react-router-dom'
import { getBanners } from '../../api/request'
import Banners from './Banners'

const Home = () => {
    const [search] = useSearchParams()
    // 获取城市选择的城市
    const cityName = search.get('name') || '';
    const [banners, setBanners] = useState([])

    useEffect(() => {
        (async () => {
            let { data } =await getBanners()
            setBanners(data)
        })()
    })
    return (
        <div>
            <CitySelect cityName={cityName} />
            {/* banner业务  广告 */}
            <Banners banners={banners} />
        </div>
    )
}

export default Home;

// import React, { useState,useEffect } from 'react'

// export default function Home( ){
//   return (
//     <div>
//       Home
//     </div>
//   )
// }
