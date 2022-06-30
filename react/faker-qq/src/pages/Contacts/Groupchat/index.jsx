import React from 'react';
import { Collapse } from 'antd-mobile';
import {  AddOutline, MinusOutline, } from 'antd-mobile-icons';

export default function Groupchat() {
  return (
    <div>
        {/* <i className="iconfont icon-yousanjiaoxing" /> */}
      <Collapse arrow={active => (active ? <MinusOutline /> : <AddOutline />)}>
          <Collapse.Panel key='1' title='未命名的群聊' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          未命名的群聊
          </Collapse.Panel>
          <Collapse.Panel key='2' title='我创建的群聊' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          我创建的群聊
          </Collapse.Panel>
          <Collapse.Panel key='3' title='我管理的群聊' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          我管理的群聊
          </Collapse.Panel>
          <Collapse.Panel key='4' title='我加入的群聊' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          我加入的群聊
          </Collapse.Panel>
        </Collapse>
    </div>
  )
}