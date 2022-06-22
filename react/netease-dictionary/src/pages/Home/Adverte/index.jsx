import React, { useEffect } from 'react'
import { Wrapper } from './style'
import Swiper from 'swiper'




export default function Adverte() {
  useEffect(() => {
    // 幻灯片可能用的很多，取第一个类名 home_info_banners swiper-container
    new Swiper('.home_info_banners', {
      // 自动轮播
      loop: true,
      autoplay: {
        delay: 1000
      }
    })
  },[])

  return (
    <Wrapper>
      <div className="home_info_banners swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <p>
                <img width="100%" src="https://shared.ydstatic.com/at/2.0.6hg/styles/indexb/banners/banner-2022-june_300.png" alt="" />
              </p>
            </div>
            <div className="swiper-slide">
              <p>
                <img width="100%" src="https://shared.ydstatic.com/at/2.0.6hg/styles/indexb/banners/banner-2020-1_300.jpg" alt="" />
              </p>
            </div>
            <div className="swiper-slide">
              <p>
                <img width="100%" src="https://shared.ydstatic.com/at/2.0.6hg/styles/indexb/banners/banner-2020-3_300.jpg" alt="" />
              </p>
            </div>
            <div className="swiper-slide">
              <p>
                <img width="100%" src="https://shared.ydstatic.com/at/2.0.6hg/styles/indexb/banners/banner-2020-5_300.jpg" alt="" />
              </p>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </Wrapper>
  )
}
