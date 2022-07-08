import React,{useState,useEffect} from "react";
import { Avatar, Button, Modal, Popover,SearchBar } from "antd-mobile";
import {Link} from 'react-router-dom'
import { AntOutline,HandPayCircleOutline, ScanningOutline} from "antd-mobile-icons";
import { Wrapper } from "./style";
import MessageList from "./MessageList";
import { actionCreators } from './store/index'
import { connect } from "react-redux";
import Scroll  from '@/components/common/Scroll'
import { forceCheck } from 'react-lazyload'


const actions = [
  { key: "scan", icon: <ScanningOutline />, text: "创建群聊" },
  { key: "payment", icon: <HandPayCircleOutline />, text: "加好友/群" },
  { key: "scan", icon: <ScanningOutline />, text: "扫一扫" },
  { key: "assistant", icon: <AntOutline />, text: "面对面快传" },
  { key: "assistant", icon: <AntOutline />, text: "收付款" },
];

function Home(props) {
  const { messages } = props
  const { getMessageDataDispatch } = props
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    getMessageDataDispatch()
  },[])
  return (
    <Wrapper>
      <div className="top">
        <div className="left">
        <div className="info_img">
          <Avatar
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F02%2F20200902191544_9a518.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659008815&t=4279b801ccf2fcf7ffb81e3a6d2a1542"
            style={{ "--size": "3.4rem", "--border-radius": "8rem" }}
          />
        </div>
        <div className="info_desc">
          <span>路旁的彩虹你别采</span>
          <div className="modal">
            <Button
              style={{'--background-color':'rgb(245, 246, 249)'}}
              onClick={() => {
                Modal.alert({
                  content: "点击遮罩关闭",
                  closeOnMaskClick: true,
                });
              }}
            >
              手机在线&nbsp;&gt;
            </Button>
          </div>
        </div>
      </div>
      <div className="right">
        <i className="iconfont icon-longmao-" ></i>
        <Popover.Menu
          className="popover"
          actions={actions}
          placement="bottom-start"
          // onAction={(node) => Toast.show(`选择了 ${node.text}`)}
          trigger="click"
        >
          <i className="iconfont icon-add"></i>
        </Popover.Menu>
      </div>
      </div>
      <div className="bottom_center" style={{ background: 'white' ,padding:'0.5rem 0.5rem'}}>
        <Link to='/adada' className="searchbar" style={{textDecoration: 'none'}}>
          <SearchBar
            placeholder='搜索'
            style={{ '--background': 'rgb(245, 246, 249)' }}
          />
        </Link>
      </div>
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <MessageList messages={messages}/>
        </div>
      </Scroll>
    </Wrapper>
  );
}
const mapStateToProps = (state) => {
  return {
    messages:state.home.messages,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMessageDataDispatch() {
      dispatch(actionCreators.getMessageList())
    },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)