/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-04 10:18:50
 * @LastEditTime: 2022-06-04 11:14:23
 * @Description: 
 */
import React from "react";
import WeUI from 'react-weui'
// 静态资源 重命名
import IconUser from './assets/img/user.png'
const {
    Tab,
    TabBody,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Badge,
} = WeUI

const User = () => {
    // 页面组件化思维
    return (
        <Tab>
            <TabBody>
                <div>
                    <Cells style={{ marginTop: '0px' }}>
                        <Cell>
                            {/* react 行内样式 {驼峰式} */}
                            <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                                {/* <img src="/src/assets/img/user.png" alt="[object Object]"> */}
                                <img src={IconUser} alt={{ width: '50px', display: 'block' }} />
                            </CellHeader>
                            <CellBody>
                                <p style={{ fontSize: '15px', color: '#888888' }}>光头强</p>
                                <p style={{ fontSize: '13px', color: '#888888' }}>欢迎来到图书馆漂流！</p>
                            </CellBody>
                        </Cell>
                        {/* react-weui 文档  props  true*/}
                        <Cell access>
                            <CellBody>
                                订单 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody>
                                发出的申请 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody>
                                收到的申请 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody>
                                收藏
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody>
                                地址
                            </CellBody>
                            <CellFooter />
                        </Cell>
                    </Cells>
                </div>
            </TabBody>
        </Tab>
    )
}

export default User