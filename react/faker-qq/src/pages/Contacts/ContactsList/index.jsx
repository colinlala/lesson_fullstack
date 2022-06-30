import React, { useRef, useState } from "react";
import { Tabs, Swiper } from "antd-mobile";
import Friends from "../Friends";
import Grouping from "../Grouping";
import Groupchat from '../Groupchat'
import Equipment from "../Equipment";

const tabItems = [
  { key: "friends", title: "好友" },
  { key: "grouping", title: "分组" },
  { key: "groupchat", title: "群聊" },
  { key: "equipment", title: "设备" },
  { key: "addresslist", title: "通讯录" },
  { key: "subscription", title: "订阅号" },
];

export default function ContactsList({friendslist}) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <>
      <Tabs
        activeKey={tabItems[activeIndex].key}
        onChange={(key) => {
          var _a;
          const index = tabItems.findIndex((item) => item.key === key);
          setActiveIndex(index);
          (_a = swiperRef.current) === null || _a === void 0
            ? void 0
            : _a.swipeTo(index);
        }}
      >
        {tabItems.map((item) => (
          <Tabs.Tab title={item.title} key={item.key} />
        ))}
      </Tabs>
      <Swiper
        direction="horizontal"
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index);
        }}
      >
        <Swiper.Item>
          <Friends friendslist={friendslist}/>
        </Swiper.Item>
        <Swiper.Item>
          <Grouping />
        </Swiper.Item>
        <Swiper.Item>
          <Groupchat />
        </Swiper.Item>
        <Swiper.Item>
          <Equipment />
        </Swiper.Item>
        <Swiper.Item>
          <div>通讯录</div>
        </Swiper.Item>
        <Swiper.Item>
          <div>订阅号</div>
        </Swiper.Item>
      </Swiper>
    </>
  );
}
