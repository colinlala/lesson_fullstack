import React, { useState } from "react";
import { Avatar, Popup, List } from "antd-mobile";
import {
    SystemQRcodeOutline,
    GlobalOutline,
    VideoOutline,
    BillOutline,
    BankcardOutline,
    GiftOutline,
    HeartOutline,
    FlagOutline,
    PictureOutline,
    FolderOutline,
    UserContactOutline,
} from "antd-mobile-icons";
import { Container, PopupContainer } from "./style";
import OtherPng from "@/assets/images/other.png";

export default function LeftPopup() {
    const [visible, setVisible] = useState(false);
    return (
        <PopupContainer>
            <div
                className="img"
                onClick={() => {
                    setVisible(true);
                }}
            >
                <Avatar
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F02%2F20200902191544_9a518.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659008815&t=4279b801ccf2fcf7ffb81e3a6d2a1542"
                    style={{ "--size": "3.4rem", "--border-radius": "8rem" }}
                />
            </div>
            <Popup
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                position="left"
                bodyStyle={{ width: "100%" }}
                showCloseButton
            >
                <Container>
                    <div className="top">
                        <div className="punch">
                            {/* <CalendarOutline /> */}
                            <i className="iconfont icon-daka"></i>
                            <span className="punch_desc">今天还没打卡哦</span>
                        </div>
                        <div className="desc">
                            <div className="left">
                                <Avatar
                                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F02%2F20200902191544_9a518.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659008815&t=4279b801ccf2fcf7ffb81e3a6d2a1542"
                                    style={{
                                        "--size": "4rem",
                                        "--border-radius": "8rem",
                                    }}
                                />
                            </div>
                            <div className="center">
                                <span className="id">路旁的彩虹你别采</span>
                                <img src={OtherPng} alt="" />
                                <div className="signature">
                                    <i className="iconfont icon-bianji"></i>
                                    <span className="signature_desc">
                                        意料之外，情理之中
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                                <SystemQRcodeOutline />
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <List
                            style={{
                                "--border-top": "none",
                                "--border-inner": "none",
                                "--border-bottom": "none",
                            }}
                        >
                            <List.Item
                                className="popupListItem"
                                prefix={<VideoOutline />}
                                onClick={() => {}}
                            >
                                直播
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<BillOutline />}
                                onClick={() => {}}
                            >
                                会员
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<BankcardOutline />}
                                onClick={() => {}}
                            >
                                钱包
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<GiftOutline />}
                                onClick={() => {}}
                            >
                                个性装扮
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<HeartOutline />}
                                onClick={() => {}}
                            >
                                情侣空间
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<GlobalOutline />}
                                onClick={() => {}}
                            >
                                王卡
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<FlagOutline />}
                                onClick={() => {}}
                            >
                                收藏
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<PictureOutline />}
                                onClick={() => {}}
                            >
                                相册
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<FolderOutline />}
                                onClick={() => {}}
                            >
                                文件
                            </List.Item>
                            <List.Item
                                className="popupListItem"
                                prefix={<UserContactOutline />}
                                onClick={() => {}}
                            >
                                厘米秀
                            </List.Item>
                        </List>
                    </div>
                    <div className="bottom">
                        <div className="bottom_div">
                            <i className="iconfont icon-shezhi1"></i>
                            <span>设置</span>
                        </div>
                        <div className="bottom_div">
                            <i className="iconfont icon-yueliang"></i>
                            <span>夜间</span>
                        </div>
                        <div className="bottom_div">
                            <i className="iconfont icon-dengji"></i>
                            <span>等级</span>
                        </div>
                        <div className="bottom_div">
                            <i className="iconfont icon-taiyang"></i>
                            <span>青山湖</span>
                        </div>
                    </div>
                </Container>
            </Popup>
        </PopupContainer>
    );
}
