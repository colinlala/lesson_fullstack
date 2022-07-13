import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./style";
import { SearchBar, Avatar } from "antd-mobile";
import {
    SmileOutline,
    StarOutline,
    UserAddOutline,
    GlobalOutline,
} from "antd-mobile-icons";
import OtherPng from "@/assets/images/other.png";
import { actionCreators } from "./store/index";
import { connect } from "react-redux";


function Search(props) {
    const navigate = useNavigate();

    // const [visible, setVisible] = useState(true);
    // const [visible1, setVisible1] = useState(true);
    const { searchList, searchHistoryList } = props;
    const { getSearchDataDispatch, getSearchHistoryDataDispatch } = props;
    useEffect(() => {
        getSearchDataDispatch();
        getSearchHistoryDataDispatch();
    }, []);


    // const letVisible = () => {
    //     setVisible(false)
    // }
    // const letVisible1 = () => {
    //     setVisible1(false)
    // }


    // const searchHistoryListItem = () => {
    //     return (
    //         <div className="search_history_list">
    //             <div className="avatar_img">
    //                 <Avatar
    //                     src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F02%2F20200902191544_9a518.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659008815&t=4279b801ccf2fcf7ffb81e3a6d2a1542"
    //                     style={{
    //                         "--size": "2rem",
    //                         "--border-radius": "8rem",
    //                     }}
    //                 />
    //             </div>
    //             <span className="search_history_list_name">爱女神</span>
    //             <div className="button_x">
    //                 <button onClick={() => {letVisible()}}>x</button>
    //             </div>
    //         </div>
    //     );
    // };
    // const searchHistoryListItem1 = () => {
    //     return (
    //         <div className="search_history_list">
    //             <div className="avatar_img">
    //                 <Avatar
    //                     src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fnote%2Fl%2Fpublic%2Fp83642840.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659153126&t=3bf3383eec2b9d063ba2270bbd204eaa"
    //                     style={{
    //                         "--size": "2rem",
    //                         "--border-radius": "8rem",
    //                     }}
    //                 />
    //             </div>
    //             <span className="search_history_list_name">纯纯粹粹</span>
    //             <div className="button_x">
    //                 <button onClick={() => {letVisible1()}}>x</button>
    //             </div>
    //         </div>
    //     );
    // };


    return (
        <Wrapper>
            <div className="search_div">
                <SearchBar
                    placeholder="搜索"
                    showCancelButton={() => true}
                    onCancel={() => {
                        navigate(-1);
                    }}
                />
            </div>
            <div className="search_history">
                {/* { visible && searchHistoryListItem()} 
                { visible1 && searchHistoryListItem1()}  */}

            </div>
            <div className="desc">
                <span>搜索指定内容</span>
            </div>
            <div className="icon">
                <div className="icon_box">
                    <UserAddOutline />
                    <span>找人/群</span>
                </div>
                <div className="icon_box">
                    <SmileOutline />
                    <span>表情</span>
                </div>
                <div className="icon_box">
                    <GlobalOutline />
                    <span>小程序</span>
                </div>
                <div className="icon_box">
                    <StarOutline />
                    <span>动态</span>
                </div>
            </div>
        </Wrapper>
    );
}

const mapStateToProps = (state) => {
    return {
      searchList: state.search.searchList,
      searchHistoryList: state.search.searchHistoryList,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getSearchDataDispatch() {
        dispatch(actionCreators.getSearchList());
      },
      getSearchHistoryDataDispatch() {
        dispatch(actionCreators.getSearchHistoryList());
      },
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(Search);