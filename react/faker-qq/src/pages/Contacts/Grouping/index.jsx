import React, { useState, useEffect } from 'react';
import { Collapse, DotLoading, Result } from 'antd-mobile';
import { CheckCircleOutline, CloseCircleOutline, ArrowDownCircleOutline, AddOutline, MinusOutline, } from 'antd-mobile-icons';

export default function Grouping() {
  return (
    <div>
        {/* style={{ '--border-top': 'none','--border-inner': 'none','--border-bottom': 'none'}} */}
        {/* <i className="iconfont icon-yousanjiaoxing" /> */}
      <Collapse defaultActiveKey={['1']} arrow={active => (active ? <MinusOutline /> : <AddOutline />)}>
          <Collapse.Panel key='1' title='特别关心' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
            特别关心
          </Collapse.Panel>
          <Collapse.Panel key='2' title='初中同学' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
            初中同学
          </Collapse.Panel>
          <Collapse.Panel key='3' title='高中同学' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
            高中同学
          </Collapse.Panel>
          <Collapse.Panel key='4' title='大学同学' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
            大学同学
          </Collapse.Panel>
          <Collapse.Panel key='5' title='老师' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
            老师
          </Collapse.Panel>
          <Collapse.Panel key='6' title='家人' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
            家人
          </Collapse.Panel>
        </Collapse>
    </div>
  )
}
