import React, { useState } from "react";
import { IndexBar, List, Image } from "antd-mobile";

const getRandomList = (min, max) => {
  return new Array(Math.floor(Math.random() * (max - min) + min)).fill("");
};

const charCodeOfA = "A".charCodeAt(0);

const groups = Array(26)
  .fill("")
  .map((_, i) => ({
    title: String.fromCharCode(charCodeOfA + i),
    // items: getRandomList(3, 10).map(() => ),
  }));

export default function Friends({ friendList }) {
  return (
    <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {friendList.map((friend) => {
          return (
            <IndexBar.Panel
              index={friend.nametitle}
              title={`${friend.nametitle}`}
              key={`${friend.nametitle}`}
              // style={{'--background-color':'white'}}
            >
              <List
                style={{
                  "--border-top": "none",
                  "--border-inner": "none",
                  "--border-bottom": "none",
                  "--active-background-color": "#eeeeee",
                }}
              >
                <List.Item
                  key={friend.id}
                  clickable
                  arrow={false}
                  // 列表项左侧
                  prefix={
                    <Image
                      src={friend.img}
                      style={{ borderRadius: 20 }}
                      fit="cover"
                      width={40}
                      height={40}
                    />
                  }
                  description={friend.description}
                >
                  {friend.name}
                </List.Item>
              </List>
            </IndexBar.Panel>
          );
        })}
      </IndexBar>
    </div>
  );
}
