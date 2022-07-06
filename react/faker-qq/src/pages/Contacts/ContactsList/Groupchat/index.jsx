import React from "react";
import { Collapse, List, Image } from "antd-mobile";
import { AddOutline, MinusOutline } from "antd-mobile-icons";

export default function Groupchat() {
  return (
    <div>
      {/* <i className="iconfont icon-yousanjiaoxing" /> */}
      <Collapse
        arrow={(active) => (active ? <MinusOutline /> : <AddOutline />)}
      >
        <Collapse.Panel
          key="1"
          title="未命名的群聊"
          arrow={(active) =>
            active ? (
              <i className="iconfont icon-xiasanjiaoxing" />
            ) : (
              <i className="iconfont icon-yousanjiaoxing" />
            )
          }
        >
          <List
            style={{
              "--border-bottom": "none",
              "--border-inner": "none",
              "--border-top": "none",
            }}
          >
            <List.Item
              key="1"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202105%2F29%2F20210529001057_aSeLB.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=3ea9dc1f0612fb09cbfe150aeb7768f2"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="2"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F21%2F20210821060555_67898.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=20f69cbb3c066ca9548684eaf2036453"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="3"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656781200&t=e9fa6a6ef1069d975e0b4ded6fe9953b"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              哆啦A梦、哆啦哆啦、哆啦暧昧、呀...
            </List.Item>
          </List>
        </Collapse.Panel>
        <Collapse.Panel
          key="2"
          title="我创建的群聊"
          arrow={(active) =>
            active ? (
              <i className="iconfont icon-xiasanjiaoxing" />
            ) : (
              <i className="iconfont icon-yousanjiaoxing" />
            )
          }
        >
          <List
            style={{
              "--border-bottom": "none",
              "--border-inner": "none",
              "--border-top": "none",
            }}
          >
            <List.Item
              key="1"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202105%2F29%2F20210529001057_aSeLB.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=3ea9dc1f0612fb09cbfe150aeb7768f2"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="2"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F21%2F20210821060555_67898.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=20f69cbb3c066ca9548684eaf2036453"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="3"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656781200&t=e9fa6a6ef1069d975e0b4ded6fe9953b"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              哆啦A梦、哆啦哆啦、哆啦暧昧、呀...
            </List.Item>
          </List>
        </Collapse.Panel>
        <Collapse.Panel
          key="3"
          title="我管理的群聊"
          arrow={(active) =>
            active ? (
              <i className="iconfont icon-xiasanjiaoxing" />
            ) : (
              <i className="iconfont icon-yousanjiaoxing" />
            )
          }
        >
          <List
            style={{
              "--border-bottom": "none",
              "--border-inner": "none",
              "--border-top": "none",
            }}
          >
            <List.Item
              key="1"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202105%2F29%2F20210529001057_aSeLB.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=3ea9dc1f0612fb09cbfe150aeb7768f2"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="2"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F21%2F20210821060555_67898.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=20f69cbb3c066ca9548684eaf2036453"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="3"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656781200&t=e9fa6a6ef1069d975e0b4ded6fe9953b"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              哆啦A梦、哆啦哆啦、哆啦暧昧、呀...
            </List.Item>
          </List>
        </Collapse.Panel>
        <Collapse.Panel
          key="4"
          title="我加入的群聊"
          arrow={(active) =>
            active ? (
              <i className="iconfont icon-xiasanjiaoxing" />
            ) : (
              <i className="iconfont icon-yousanjiaoxing" />
            )
          }
        >
          <List
            style={{
              "--border-bottom": "none",
              "--border-inner": "none",
              "--border-top": "none",
            }}
          >
            <List.Item
              key="1"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202105%2F29%2F20210529001057_aSeLB.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=3ea9dc1f0612fb09cbfe150aeb7768f2"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="2"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F21%2F20210821060555_67898.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659232802&t=20f69cbb3c066ca9548684eaf2036453"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              秋风扫落叶、阿达阿达、a吖丫丫丫...
            </List.Item>
            <List.Item
              key="3"
              clickable
              arrow={false}
              prefix={
                <Image
                  src="https://img2.baidu.com/it/u=4244269751,4000533845&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1656781200&t=e9fa6a6ef1069d975e0b4ded6fe9953b"
                  style={{ borderRadius: 20 }}
                  fit="cover"
                  width={50}
                  height={50}
                />
              }
            >
              哆啦A梦、哆啦哆啦、哆啦暧昧、呀...
            </List.Item>
          </List>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}
