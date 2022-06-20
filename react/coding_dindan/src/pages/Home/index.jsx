import React, { useState, useEffect } from 'react'
// import {} from './style'
import CitySelect from './CitySelect'
import { useSearchParams } from 'react-router-dom'
import { getBanners } from '../../api/request'
import Banners from './Banners'
import SetMeal from './SetMeal'

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
            {/* 单纯切页面 ，把页面展示完成，但功能不展开*/}
            <SetMeal />
        </div>
    )
}
export default Home;
