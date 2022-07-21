import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    OtherWrapper,
    PublicWrapper,
    HistoryWrapper,
    SearchResWrapper,
} from "./style";
import { Avatar } from "antd-mobile";
import {
    SmileOutline,
    StarOutline,
    UserAddOutline,
    GlobalOutline,
} from "antd-mobile-icons";
import { actionCreators } from "./store/index";
import { connect } from "react-redux";
import SearchBox from "../SearchBox";
import { CSSTransition } from "react-transition-group";
import Scroll from "@/components/common/Scroll";
import Lazyload from "react-lazyload";
import OtherImg from "@/assets/images/dyj.png";

function Search(props) {
    const navigate = useNavigate();

    const { searchList, searchHistoryList } = props;
    const { getSearchDataDispatch, getSearchHistoryDataDispatch } = props;
    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    useEffect(() => {
        if (searchHistoryList.length == 0) {
            getSearchHistoryDataDispatch();
        }
    }, []);

    useEffect(() => {
        getSearchDataDispatch(query);
    }, [query]);
    //用于在子组件searchBox执行，更新父组件的query
    const handleQuery = (q) => {
        setQuery(q);
    };

    const renderHistoryList = (index) => {
        return (
            <>
                {index.map((item) => {
                    return (
                        <HistoryWrapper key={item.id}>
                            <div className="avatar_img">
                                <Lazyload
                                    placeholder={
                                        <img
                                            width="100%"
                                            height="100%"
                                            src={OtherImg}
                                        />
                                    }
                                >
                                    <Avatar
                                        src={item.img}
                                        style={{
                                            "--size": "2rem",
                                            "--border-radius": "8rem",
                                        }}
                                    />
                                </Lazyload>
                            </div>
                            <span className="search_history_list_name">
                                {item.name}
                            </span>
                            <div className="button_x">
                                <button
                                    onClick={() => {
                                       alert("删除功能写不下去了，下次一定，敬请期待:)")
                                    }}
                                >
                                    x
                                </button>
                            </div>
                        </HistoryWrapper>
                    );
                })}
            </>
        );
    };

    const renderSearchList = () => {
        return (
            <>
                {searchList.map((item) => {
                    return (
                        <SearchResWrapper key={item.id}>
                            <div className="avatar_img">
                                <Lazyload
                                    placeholder={
                                        <img
                                            width="100%"
                                            height="100%"
                                            src={OtherImg}
                                        />
                                    }
                                >
                                    <Avatar
                                        src={item.img}
                                        style={{
                                            "--size": "2rem",
                                            "--border-radius": "8rem",
                                        }}
                                    />
                                </Lazyload>
                            </div>
                            <span className="search_history_list_name">
                                {item.name}
                            </span>
                        </SearchResWrapper>
                    );
                })}
            </>
        );
    };

    const renderOther = () => {
        return (
            <OtherWrapper>
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
            </OtherWrapper>
        );
    };

    return (
        // <CSSTransition
        //     in={show}
        //     timeout={400}
        //     appear={true}
        //     classNames="fly"
        //     unmountOnExit
        //     onExit={() => {
        //         navigate(-1);
        //     }}
        // >
        <>
            <SearchBox newQuery={query} handleQuery={handleQuery} />
            <PublicWrapper show={!query}>
                <Scroll>
                    {!query && (
                        <div>
                            {renderHistoryList(searchHistoryList)}
                            {renderOther()}
                        </div>
                    )}
                </Scroll>
            </PublicWrapper>
            <PublicWrapper show={query}>
                <Scroll>
                    {query && renderSearchList()}
                </Scroll>
            </PublicWrapper>
        </> 
        // </CSSTransition>
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
        getSearchDataDispatch(query) {
            dispatch(actionCreators.getSearchList(query));
        },
        getSearchHistoryDataDispatch() {
            dispatch(actionCreators.getSearchHistoryList());
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
