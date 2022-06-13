/*
 * @Date         : 2022-06-13 20:34:33
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-13 21:58:45
 * @description  : 
 */
// 样式组件
import React from 'react'
import { ContestWrapper, Tab, TabItem ,NoData} from './style'
import noContest from '../../assets/images/no.png'

const Contest = ({ data }) => {
    return (
        // 切页面
        <ContestWrapper>
            <h2>热门赛事</h2>
            <Tab>
                {
                    data.map(item =>
                        <TabItem key={item.id}>
                            <span>{item.title}</span>
                        </TabItem>
                    )
                }
            </Tab>
            {
                data.length == 0 && <NoData>
                    <img src={noContest} alt="" />
                    <span>暂无赛事，请看更多演出</span>
                </NoData>
            }
        </ContestWrapper>
    )
}

export default Contest