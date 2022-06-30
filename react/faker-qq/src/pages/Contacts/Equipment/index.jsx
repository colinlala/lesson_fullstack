import React from "react";
import { List,Image } from "antd-mobile";
import Ipad from '@/assets/images/ipad.png'
import Dyj from '@/assets/images/dyj.png'
import Computer from '@/assets/images/comp.png'

export default function Equipment() {
  return (
    <List style={{ '--border-top': 'none','--border-inner': 'none','--border-bottom': 'none'}}>
      <List.Item
        clickable
        arrow={false}
        key="1"
          prefix={
            <Image
              src={Ipad}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description='手机轻松传照片文件到iPad'
      >
        我的iPad
      </List.Item>
      <List.Item
        clickable
        arrow={false}
        key="2"
          prefix={
            <Image
              src={Dyj}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description='将手机文件或照片发到电脑连接的打印机'
      >
        我的打印机
      </List.Item>
      <List.Item
        clickable
        arrow={false}
        key="3"
          prefix={
            <Image
              src={Computer}
              style={{ borderRadius: 20 }}
              fit='cover'
              width={40}
              height={40}
            />
          }
          description='无需数据线，手机轻松传文件到电脑'
      >
        我的电脑
      </List.Item>
    </List>
  );
}
