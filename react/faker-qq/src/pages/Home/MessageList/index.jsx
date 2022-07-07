import React, { useState } from "react";
import {
  List,
  SwipeAction,
  PullToRefresh,
  Image,
  Badge,
  InfiniteScroll,
  SpinLoading,
  DotLoading,
} from "antd-mobile";
import { sleep } from "antd-mobile/es/utils/sleep";
// import { DragDropContext, Draggable, Droppable, } from 'react-beautiful-dnd';
import {Wrapper} from './style'
function getNextData() {
  const ret = [];
  for (let i = 0; i < 18; i++) {
    ret.unshift(console.log("刷新好了"));
  }
  return ret;
}

const statusRecord = {
  pulling: 
    <div style={{ color: '#1c81ed' }}>
      <span>用力拉呀</span>
    </div>,
  canRelease: 
    <div style={{ color: '#1c81ed' }}>
      <span>松开吧</span>
    </div>,
  // refreshing: <SpinLoading color='primary' />,
  refreshing: 
    <div style={{ color: '#1c81ed' }}>
      <span>死命加载中</span>
      <DotLoading color='primary' />
    </div>,
  complete: 
    <div style={{ color: '#1c81ed' }}>
      <span>好啦</span>
    </div>,
};

export default function MessageList({ messages }) {
  const [data, setData] = useState(() => getNextData());
  const [data2, setData2] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  // const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const rightActions = [
    {
      key: "pin",
      text: "置顶",
      color: "primary",
    },
    {
      key: "mute",
      text: "标为已读",
      color: "warning",
    },
    {
      key: "delete",
      text: "删除",
      color: "danger",
    },
  ];

  async function loadMore() {
    const append = await mockRequest();
    setData2((val) => [...val, ...append]);
    setHasMore(append.length > 0);
  }

  return (
    <Wrapper>
      <PullToRefresh
        onRefresh={async () => {
          await sleep(1000);
          setData([...getNextData(), ...data]);
        }}
        renderText={(status) => {
          return <div>{statusRecord[status]}</div>;
        }}
      >
        <List
          style={{
            "--border-top": "none",
            "--border-inner": "none",
            "--border-bottom": "none",
          }}
        >
          {messages.map((item) => (
            <SwipeAction key={item.id} rightActions={rightActions}>
              <List.Item
                key={item.id}
                clickable
                arrow={false}
                // 列表项左侧
                prefix={
                  <Image
                    src={item.img}
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                // 右侧
                extra={
                  <div
                    className="right"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ marginBottom: "0.5rem" }}>{item.time}</span>
                    <div>
                      <Badge content={item.nums} />
                    </div>
                  </div>
                }
                description={item.description}
              >
                {item.name}
              </List.Item>
            </SwipeAction>
          ))}
        </List>
      </PullToRefresh>
      {/* <InfiniteScroll loadMore={loadMore} hasMore={hasMore} /> */}
    </Wrapper>
  );
}