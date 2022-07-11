import React, { useRef, useState, useEffect } from "react";
import { Tabs, Swiper } from "antd-mobile";
import { Wrapper } from "./style";
import Friends from "./Friends";
import Grouping from "./Grouping";
import Groupchat from "./Groupchat";
import Equipment from "./Equipment";
import Addresslist from "./Addresslist";
import Subscription from "./Subscription";
import { actionCreators } from "./store/index";
import { connect } from "react-redux";

const tabItems = [
  { key: "friends", title: "好友" },
  { key: "grouping", title: "分组" },
  { key: "groupchat", title: "群聊" },
  { key: "equipment", title: "设备" },
  { key: "addresslist", title: "通讯录" },
  { key: "subscription", title: "订阅号" },
];

function ContactsList(props) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const { friendList } = props;
  const { getFriendsDataDispatch } = props;
  useEffect(() => {
    getFriendsDataDispatch();
  });
  return (
    <Wrapper>
      <div className="tabs">
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
          style={{ backgroundColor: "white" }}
        >
          {tabItems.map((item) => (
            <Tabs.Tab title={item.title} key={item.key} />
          ))}
        </Tabs>
      </div>
      <Swiper
        // className="swiper"
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
          <Friends friendList={friendList} />
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
          <Addresslist />
        </Swiper.Item>
        <Swiper.Item>
          <Subscription />
        </Swiper.Item>
      </Swiper>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    friendList: state.contacts.friendList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getFriendsDataDispatch() {
      dispatch(actionCreators.getFriendsList());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
