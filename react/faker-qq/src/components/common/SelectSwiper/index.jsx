import React, { useEffect } from 'react'
import { BannersWrapper } from './style'
import Swiper from 'swiper'
import { actionCreators } from "./store/index";
import { connect } from "react-redux";

function SelectSwiper(props) {
    const { homeswiperlist } = props
    const { getSwiperDataDispatch } = props
    useEffect(()=>{
        new Swiper('.btn-banners', {
            slidesPerColumn : 1, 
            pagination: {
                el: '.swiper-pagination'
            }
        })
    })
    const renderFirstBtnBannersPage = () => {
        let items = banners.slice(0, 12);
        return items.map(item => {
            return (
                <button
                    className="swiper-item"
                    key={item.id}
                >
                    <div>
                        <div className='swiper_item_img'>
                            {/* <img src={item.img} /> */}
                        </div>
                        <span className='swiper_item_span'>
                            {item.title}
                        </span>
                    </div>
                </button>
            )
        })
    }
    const renderSecondBtnBannersPage = () => {
        let items = banners.slice(12, 24);
        return items.map(item => {
            return (
                <button
                    className="swiper-item"
                    key={item.id}
                >
                    <div>
                    <div className='swiper_item_img'>
                            {/* <img src={item.img} /> */}
                        </div>
                        <span className='swiper_item_span'>
                            {item.title}
                        </span>
                    </div>
                </button>
            )
        })
    }
    const renderThirdBtnBannersPage = () => {
        let items = banners.slice(24);
        return items.map(item => {
            return (
                <button
                    className="swiper-item"
                    key={item.id}
                >
                    <div>
                    <div className='swiper_item_img'>
                            {/* <img src={item.img} /> */}
                        </div>
                        <span className='swiper_item_span'>
                            {item.title}
                        </span>
                    </div>
                </button>
            )
        })
    }

  return (
    <BannersWrapper>
      {/* 幻灯片 npm i swiper@4.5.0 */}
      <div className="btn-banners swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {renderFirstBtnBannersPage()}
                    </div>
                    <div className="swiper-slide">
                        {renderSecondBtnBannersPage()}
                    </div>
                    <div className="swiper-slide">
                        {renderThirdBtnBannersPage()}
                    </div>
                </div>
                {/* 分页 */}
                <div className="swiper-pagination"></div>
            </div>
    </BannersWrapper>
  )
}

const mapStateToProps = (state) =>{
    return {
        homeswiperlist:state.homeswiper.homeswiperlist
    }
}
const mapDspatchToProps = (dispatch) => {
    return {
        getSwiperDataDispatch() {
            dispatch(actionCreators.getHomeSwiperList());
        }
    };
}
export default connect(mapStateToProps,mapDspatchToProps)(SelectSwiper)


