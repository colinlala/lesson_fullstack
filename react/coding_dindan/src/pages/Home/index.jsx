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

const Home = () => {
    const [search] = useSearchParams()
    // 获取城市选择的城市
    const cityName = search.get('name') || '';
    // console.log(cityName)
    return (
        <div>
            <CitySelect cityName={cityName} />
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
