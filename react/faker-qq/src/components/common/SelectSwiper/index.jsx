import React, { useEffect } from "react";
import { BannersWrapper } from "./style";
import Swiper from "swiper";
import { actionCreators } from "./store/index";
import { connect } from "react-redux";

function SelectSwiper(props) {
    const { homeswiperlist } = props;
    const { getSwiperDataDispatch } = props;
    useEffect(() => {
        new Swiper(".mySwiper", {
            slidesPerView: 4,
            grid: {
                rows: 3,
            },
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
    useEffect(() => {
        getSwiperDataDispatch();
    }, []);
    const renderFirstBtnBannersPage = () => {
        let items = homeswiperlist.slice(0, 12);
        console.log(items,'111111111111111111111111111');

        return items.map((item) => {
            return (
                <div className="swiper-item" key={item.id}>
                    <div>
                        <p>
                            <img src={item.img} alt="" />
                        </p>
                        <span>{item.title}</span>
                    </div>
                </div>
            );
        });
    };
    const renderSecondBtnBannersPage = () => {
        let items = homeswiperlist.slice(12, 24);
        console.log(items,'22222222222222222222222222');

        return items.map((item) => {
            return (
                // <div className="swiper_item" key={item.id}>
                //     <div>
                //         <p className="swiper_item_i">
                //             <i className={item.iname}></i>
                //         </p>
                //         <span className="swiper_item_span">{item.title}</span>
                //     </div>
                // </div>
                <div className="swiper-item" key={item.id}>
                    <div>
                        <p>
                            <img src={item.img} alt="" />
                        </p>
                        <span>{item.title}</span>
                    </div>
                </div>
            );
        });
    };
    const renderThirdBtnBannersPage = () => {
        let items = homeswiperlist.slice(24);
        console.log(items,'3333333333333333333333333');
        return items.map((item) => {
            return (
                <div className="swiper-item" key={item.id}>
                    <div>
                        <p>
                            <img src={item.img} alt="" />
                        </p>
                        <span>{item.title}</span>
                    </div>
                </div>
            );
        });
    };

    return (
        <BannersWrapper>
            {/* 幻灯片 npm i swiper@4.5.0 */}
            <div className="swiper mySwiper">
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
    );
}

const mapStateToProps = (state) => {
    return {
        homeswiperlist: state.homeswiper.homeswiperlist,
    };
};
const mapDspatchToProps = (dispatch) => {
    return {
        getSwiperDataDispatch() {
            dispatch(actionCreators.getHomeSwiperList());
        },
    };
};
export default connect(mapStateToProps, mapDspatchToProps)(SelectSwiper);
