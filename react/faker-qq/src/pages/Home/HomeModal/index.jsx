import React,{useState,useEffect} from "react";
import {
    WholeModalWrapper,
    TopWrapper,
    CenterWrapper,
    SwiperWrapper,
    BottomWrapper,
    ModalWrapper
} from "./style";
import SelectImg from "@/assets/images/dyj.png";

export default function HomeModal(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const { onClose } = props;
    const { modalVisible: show} = props;


    useEffect(() => {
        setModalVisible(show)
    }, [show])
    const maskClick = () => {
        setModalVisible(false);
         onClose();
    };
    return (
        modalVisible && <WholeModalWrapper>
            <ModalWrapper>
                <TopWrapper>
                    <span className="top_world">切换账号</span>
                    <div className="three_select">
                        <div className="select_img">
                            <img src={SelectImg} alt="" />
                        </div>
                        <div className="select_add">
                            <i className="iconfont icon-jia"></i>
                        </div>
                        <div className="select_quit">
                            <i className="iconfont icon-tuichu"></i>
                        </div>
                    </div>
                </TopWrapper>
                <CenterWrapper>
                    <span className="center_world">我的在线状态</span>
                    <div className="online_state">
                        <img src={SelectImg} alt="" />
                        <span className="online_state_world">占个位</span>
                    </div>
                </CenterWrapper>
                <SwiperWrapper>
                    <div>先占个位</div>
                </SwiperWrapper>
                <BottomWrapper>
                    <span className="bottom_world">4个好友更新动态</span>
                    <div className="bottom_img">先占个位</div>
                </BottomWrapper>
            </ModalWrapper>
            <div className="mask" onClick={maskClick}></div>
        </WholeModalWrapper>
    );
}
