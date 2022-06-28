import React from "react";
import { Avatar, Button, Modal, Popover, Toast } from "antd-mobile";
// import { Action } from "antd-mobile/es/components/popover";
import {
  AntOutline,
  HandPayCircleOutline,
  ScanningOutline,
  TransportQRcodeOutline,
} from "antd-mobile-icons";
import { Wrapper } from "./style";

const actions = [
  { key: "scan", icon: <ScanningOutline />, text: "扫一扫" },
  { key: "payment", icon: <HandPayCircleOutline />, text: "付钱/收钱" },
  { key: "bus", icon: <TransportQRcodeOutline />, text: "乘车码" },
  { key: "assistant", icon: <AntOutline />, text: "智能助理" },
];

export default function Home() {
  return (
    <Wrapper>
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
              // block
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
        <span style={{fontSize:'2.5rem',paddingRight:'1rem'}}>+</span>
        {/* <i className="iconfont icon-add" style={{fontSize:'2rem'}}></i> */}
        <Popover.Menu
          className="popover"
          actions={actions}
          placement="bottom-start"
          onAction={(node) => Toast.show(`选择了 ${node.text}`)}
          trigger="click"
        >
          <span style={{fontSize:'2.5rem',paddingRight:'-1.3rem'}}>+</span>
        </Popover.Menu>
      </div>
    </Wrapper>
  );
}
