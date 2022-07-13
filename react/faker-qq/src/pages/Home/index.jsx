import React, { useState, useEffect } from "react";
import { Avatar, Button, Modal, Popover, SearchBar, Popup } from "antd-mobile";
import { Link } from "react-router-dom";
import {
  FileOutline,
  UserAddOutline,
  ScanningOutline,
  ScanCodeOutline,
  ChatAddOutline,
} from "antd-mobile-icons";
import { Wrapper } from "./style";
import MessageList from "./MessageList";
import HomeModal from "./HomeModal";
import { actionCreators } from "./store/index";
import { connect } from "react-redux";
import LeftPopup from "@/components/common/LeftPopup";
import Scroll from "@/components/common/Scroll";

const actions = [
  { key: "add", icon: <ChatAddOutline />, text: "创建群聊" },
  { key: "payment", icon: <UserAddOutline />, text: "加好友/群" },
  { key: "scan", icon: <ScanningOutline />, text: "扫一扫" },
  { key: "fast", icon: <FileOutline />, text: "面对面快传" },
  { key: "money", icon: <ScanCodeOutline />, text: "收付款" },
];

function Home(props) {
  const { messages } = props;
  const { getMessageDataDispatch } = props;
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    getMessageDataDispatch();
  }, []);
  const onModalClose = () => {
    setModalVisible(false)
  }
  return (
    <Wrapper>
      <div className="top">
        <LeftPopup />
        <div className="top_center">
          <span className="top_center_span">路旁的彩虹你别采</span>
          <div className="modal">
            {/* <Button
              onClick={() => {
                Modal.show({
                  content:<HomeModal/>,
                  closeOnMaskClick: true,
                });
              }}
            >
              手机在线&nbsp;&gt;
            </Button> */}
            <HomeModal modalVisible={modalVisible} onClose={onModalClose}/>
            <button onClick={() => setModalVisible(true)}>手机在线&nbsp;&gt;</button>
          </div>
        </div>
        <div className="top_right">
          <i className="iconfont icon-longmao-"></i>
          <Popover.Menu
            className="popover"
            actions={actions}
            placement="bottom-start"
            trigger="click"
          >
            <i className="iconfont icon-add"></i>
          </Popover.Menu>
        </div>
      </div>
      <div
        className="bottom_center"
        style={{ background: "white", padding: "0.5rem 0.5rem" }}
      >
        <Link
          to="/Search"
          className="searchbar"
          style={{ textDecoration: "none" }}
        >
          <SearchBar
            placeholder="搜索"
            style={{ "--background": "rgb(245, 246, 249)" }}
          />
        </Link>
      </div>
      <Scroll>
        <MessageList messages={messages} />
      </Scroll>
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    messages: state.home.messages,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMessageDataDispatch() {
      dispatch(actionCreators.getMessageList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
