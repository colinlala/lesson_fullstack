import React, { useState, useEffect } from 'react';
import { Collapse ,List,Image} from 'antd-mobile';
import {  AddOutline, MinusOutline, } from 'antd-mobile-icons';




export default function Grouping({groups}) {
  // const isTb = (titles) =>{
  //   let arr = groups.map(item => item.group)
  //   for(let i of arr){
  //     if(arr.group==titles){
  //       return (
  //         <List.Item 
  //                           key={arr.id} 
  //                           clickable 
  //                           arrow={false}
  //                           prefix={
  //                             <Image
  //                                 src={arr.img}
  //                                 style={{ borderRadius: 20 }}
  //                                 fit="cover"
  //                                 width={40}
  //                                 height={40}
  //                             />
  //                           }
  //                           description={arr.description}
  //                       >
  //                       {arr.name}
  //         </List.Item> 
  //       )
  //     }
  //   }
  // }
  return (
    <div>
      <Collapse arrow={active => (active ? <MinusOutline /> : <AddOutline />)}>
          <Collapse.Panel key='1' title='特别关心' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
            <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
              <List.Item 
                key="1" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
            </List>
          </Collapse.Panel>
          <Collapse.Panel key='2' title='网友' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
              <List.Item 
                key="1" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F11%2F20210811130239_16d6e.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=8e6012de8fe542ea44f878592eb9ad6d"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[离线]GG，新买的1060ti居然也是锻炼过的'
              >
                斑斑驳驳
              </List.Item>
              <List.Item 
                key="2" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
              <List.Item 
                key="3" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
              <List.Item 
                key="4" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
            </List>
          </Collapse.Panel>
          <Collapse.Panel key='3' title='初中同学' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
              <List.Item 
                key="1" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
            </List>
          </Collapse.Panel>
          <Collapse.Panel key='4' title='高中同学' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
              <List.Item 
                key="1" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
            </List>
          </Collapse.Panel>
          <Collapse.Panel key='5' title='大学同学' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
              <List.Item 
                key="1" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
            </List>
          </Collapse.Panel>
          <Collapse.Panel key='6' title='老师' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
              <List.Item 
                key="1" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
            </List>
          </Collapse.Panel>
          <Collapse.Panel key='7' title='家人' arrow={active => active ? <i className="iconfont icon-xiasanjiaoxing" /> : <i className="iconfont icon-yousanjiaoxing" />}>
          <List style={{ '--border-bottom': 'none','--border-inner': 'none','--border-top': 'none' }}>
              <List.Item 
                key="1" 
                clickable 
                arrow={false}
                prefix={
                  <Image
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F22%2F20210822070705_cfd6b.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=b2a69c2ab7c7847c9d4834173d4d2153"
                    style={{ borderRadius: 20 }}
                    fit="cover"
                    width={40}
                    height={40}
                  />
                }
                description='[忙碌]第一次来广州，才知道广州原来是水上城？'
              >
                爱女神
              </List.Item>
            </List>
          </Collapse.Panel>
        </Collapse>
    </div>
  )
}
