import React, { useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'

// path 动态参数部分
const Detail = () => {

    const navigate = useNavigate();

    // const { id } = useParams();
    // console.log(id)

    // http://localhost:3000/post?id=123456789
    // console.log(window.location.href)
    // ?id=123456789
    // console.log(window.location.search)
    // html5

    // let paramObj = new URLSearchParams(useLocation().search)
    // 获取http://localhost:3000/post?id=123456789 的 123456789
    // console.log(paramObj.get('id'))

    let id = null;
    const paramsObj = useParams();
    // 空对象  {}
    // console.log(paramsObj)
    if (paramsObj?.id) {
        // 获取到/post/123456789 的 123456789
        id = paramsObj.id;
    } else {
        let searchObj = new URLSearchParams(useLocation().search)
        if (searchObj.get('id')) {
            id = searchObj.get('id')
        }
    }

    // 防止直接输入url，从而没有id导致的页面崩坏，
    useEffect(() => {
        if (!id) {
            // 回到首页
            // You should call navigate() in a React.useEffect(), not when your component is first rendered.
            // useNavigate 应该放在生命周期内，而不应该放在组件第一次挂载渲染
            navigate('/')
        }
    })


    // console.log(id);
    return (
        <>
            Detail {id}
        </>
    )
}

export default Detail
