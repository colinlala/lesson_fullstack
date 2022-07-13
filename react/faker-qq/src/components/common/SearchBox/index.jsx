import React, { useState, useEffect, useRef, memo } from "react";
import { SearchWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { SearchOutline } from 'antd-mobile-icons'
import { SearchBar } from 'antd-mobile'

export default memo(function SearchBox(props) {
    
    const queryRef = useRef();
    let navigate = useNavigate();
    const { newQuery } = props
    const { handleQuery } = props;
    const [show,setShow] =useState(false)

    //变量
    const [query, setQuery] = useState("");

    //声明周期,一进这个页面就focus
    useEffect(() => {
        queryRef.current.focus();
    }, []);

    //函数
    const handleChange = (e) => {
        let val = e.currentTarget.value;
        setQuery(val);
        handleQuery(val);
    };

    return (
        <SearchWrapper>
            {/* <div className="search_div">
                <SearchBar
                    placeholder="搜索"
                    showCancelButton={() => true}
                    onCancel={() => {
                        navigate(-1);
                    }}
                    onChange={handleChange}
                    ref={queryRef}
                />
            </div> */}
                
                <div className="search_box">
                    <input
                        type="text"
                        className="box"
                        placeholder='&nbsp;&nbsp;搜索'
                        onChange={handleChange}
                        ref={queryRef}
                    ></input>
                </div>
                <div className="button_box">
                    <button className="button_c"
                    style={show? {backgroundColor: 'grey'}:null}
                    onClick={() => {
                        navigate(-1);
                        setShow(true)
                    }}>
                        取消
                    </button>
                </div>
        </SearchWrapper>
    );
});
