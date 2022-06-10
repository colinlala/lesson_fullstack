/*
 * @Date         : 2022-06-10 14:59:39
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-10 16:48:04
 * @description  : 
 */
// 小家页 
import React from "react";
import WeUI from 'react-weui'
import { useNavigate } from "react-router-dom";
import IconHome from '../assets/images/home.png'
import IconUser from '../assets/images/user.png'

const {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    Cells,
    CellsTitle,
    Cell,
    CellBody,
    CellFooter,
    CellHeader,
    // 徽章组件
    Badge,
} = WeUI

const User = () => {
    const navigate = useNavigate();
    // 传的参数是什么 就跳到哪里去，要不然会写很多个gotoXxxx函数
    const gotoPage = (page) => {
        navigate(page)
    }
    return (
        <Tab>
            <TabBody>
                <div>
                    <Cells style={{ marginTop: 0 }}>
                        {/* onClick需要的是函数，而不是函数的运行结果 */}
                        {/* 如果不用bind，gotoPage('/login') 就直接跳转*/}
                        {/* bind会返回一个函数 ，还可以传参*/}
                        <Cell onClick={gotoPage.bind(null, '/login')}>
                            <CellHeader style={{ position: 'relative', marginRight: '10px' }}>
                                <img src={IconUser} style={{ width: '50px', display: 'block' }} />
                            </CellHeader>
                            <CellBody>
                                <p>colincclala</p>
                                <p style={{fontSize:'13px',color:'#888888'}}>欢迎来到图书馆！</p>
                            </CellBody>
                        </Cell>
                    </Cells>
                </div>
            </TabBody>
            <TabBar>
                <TabBarItem
                    active={false}
                    icon={<img src={IconHome} />}
                    label="书单"
                    onClick={gotoPage.bind(null, '/')}
                />
                <TabBarItem
                    active={true}
                    icon={<img src={IconUser} />}
                    label="我的"
                />
            </TabBar>
        </Tab>
    )
}

export default User