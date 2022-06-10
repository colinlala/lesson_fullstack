/*
 * @Date         : 2022-06-10 14:59:18
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-10 19:55:01
 * @description  : 
 */
import React from "react";
import WeUI, { Form } from 'react-weui'
import IconHome from '../assets/images/home.png'
import IconUser from '../assets/images/user.png'
import { useNavigate } from "react-router-dom";
import BDBookItem from '../components/BDBookItem'
import '../styles/style.css'

const {
    // 重名可取别名
    Tab: WTab,
    TabBody,
    TabBar,
    TabBarItem,
    Panel,
    PanelBody,
    SearchBar
} = WeUI

const Tab = () => {
    const navigate = useNavigate();
    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6];
    // 跳转到 user
    const gotoUser = () => {
        navigate('/user')
    }
    return (
        <WTab className="wtab">
            <SearchBar
                className="searchbar"
                placeholder="请输入您要查找的图书"
                lang={{ cancel: '取消' }}
            ></SearchBar>
            <TabBody>
                <Panel>
                    <PanelBody>
                        <div>
                            {
                                items.map((item, i) => {
                                    return (
                                        <BDBookItem key={i} />
                                    )
                                })
                            }
                        </div>
                    </PanelBody>
                </Panel>
            </TabBody>
            <TabBar className="tabbar">
                {/* 一般不这样引入 */}
                {/* <TabBarItem active={true} icon={<img src="src/assets/images/home.png"/>} label="书单" /> */}
                <TabBarItem active={true} icon={<img src={IconHome} />} label="书单" />
                <TabBarItem
                    onClick={gotoUser}
                    active={false}
                    icon={<img src={IconUser} />}
                    label="我" />
            </TabBar>
        </WTab>
    )
}

export default Tab