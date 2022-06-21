import React from 'react'
import { Wrapper } from './style'
import { NavBar } from 'antd-mobile'
// Outlet 二级路由
import { useNavigate, Outlet } from 'react-router-dom'

export default function HomeDetail() {
    // console.log('-----------------')
    // 点击返回上一个页面
    const navigate = useNavigate()
    return (
        <Wrapper>
            {/* 路由出栈需求,返回*/}
            <div className="detail-top">
                <NavBar
                    // className="detail-left"
                    back='返回'
                    onBack={() => navigate(-1)}
                // 出栈
                // onLeftClick={() => navigate(-1)}
                // icon={<Icon type="left" />}
                >
                    详情
                </NavBar>
                <Outlet />
            </div>
        </Wrapper>
    )
}
