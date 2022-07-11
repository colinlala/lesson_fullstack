import React, { useState } from "react";
import { Avatar, Popup } from "antd-mobile";

export default function LeftPopup() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div
        className="top_left"
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
        123
      </Popup>
    </>
  );
}
