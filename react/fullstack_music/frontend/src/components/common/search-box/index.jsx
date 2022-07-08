import React, { useEffect, useState, memo, useRef, useMemo } from "react";
import styled from "styled-components";
import style from '@/assets/global-style'
import { debounce } from '@/api/utils'



const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    /* box-sizing + width 占一屏或者一半 */
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;
    padding-right: 1rem;
    height: 2rem;
    background: ${style["theme-color"]};
    .icon-back{
        font-size: 1.2rem;
        color: ${style["font-color-light"]};
    }
    .box{
        flex: 1;
        margin: 0 0.25rem;
        line-height: 0.9rem;
        background-color: ${style["theme-color"]};
        color:${style["highlight-background-color"]};
        font-size:${style["font-size-m"]};
        outline: none;
        border: none;
        border-bottom: 1px solid ${style["border-color"]};
        &::placeholder{
            color:${style["font-color-light"]}
        }
    }
    .icon-delete{
        font-size: 16px;
        color: ${style["background-color"]};
    }
`

const SearchBox = (props) => {
    // 结构父组件分两部分
    // 1. 读状态
    // 2. 方法
    const queryRef = useRef()
    // console.log(queryRef);
    const { newQuery } = props
    const { handleQuery, back } = props
    const [ query, setQuery ] = useState('')
    // 父组件传过来的函数封装一下
    // 优化再升级
    // useMemo 可以缓存 上一次函数计算的结果 
    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery,500)
    },[handleQuery])

    // mount（挂载）
    useEffect(() => {
        // 挂载后 聚焦
        queryRef.current.focus();
    },[])

    // 使用 useEffect 去更新
    useEffect(() => {
        // query 更新
        // let curQuery = query
        handleQueryDebounce(query)
    },[query])

    useEffect(() => {
        // mount 时候 执行 父组件 newQuery -> input query
        let curQuery = query
        if(newQuery !== query){
            curQuery = newQuery
            queryRef.current.value = newQuery
        }
        setQuery(curQuery)
        // newQuery 更新时执行
    },[newQuery])

    const clearQuery = () => {
        setQuery('')
        queryRef.current.value = ""
        queryRef.current.focus()
    }
    const handleChange = (e) => {
        let val = e.currentTarget.value
        setQuery(val)
    }
    const displayStyle = query ? {display:'block'} : {display:'none'};
    

    return (
        <SearchBoxWrapper>
            <i 
                className="iconfont icon-back" 
                onClick={() => back()}
            >&#xe655;</i>
            <input 
                type="text" 
                className="box" 
                placeholder="搜索歌曲、歌手、专辑"
                ref={queryRef}
                onChange={handleChange}
            />
            <i 
                className="iconfont icon-delete" 
                style={displayStyle}
                onClick={clearQuery}
            >&#xe600;</i>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)