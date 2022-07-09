// useRef 用来获取DOM元素对象，保存数据
// useRef DOM相关
// useCallback 性能相关
import  React, { useState,
  useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
 //  useRef  DOM 相关
 //  useCallback 性能优化 
import { 
    getHotKeyWords,
    changeEnterLoading,
    getSuggestList,
    // getSongDetail,
} from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import { 
    Container,
    ShortcutWrapper,
    Hotkey,
} from './style'
import SearchBox from '@/components/common/search-box'
import Loading from '@/components/common/loading'
import { 
    EnterLoading,
    List,
    ListItem,
} from './../Singers/style'
import Scroll  from '@/components/common/Scroll'
import Lazyload, { forceCheck } from 'react-lazyload'
import singerImg from './singer.png'
import musicImg from '@/components/list/music.png'
import { SongItem } from '../Album/style';
import { getName } from '@/api/utils';

const Search = (props) => {
 const navigate = useNavigate();
 const { 
    hotList, 
    songsCount, 
    enterLoading, 
    suggestList, 
    songsList 
} = props
 const { 
     getHotKeywordsDispatch, 
     changeEnterLoadingDispatch,
     getSuggestListDispatch,
     getSongDetailDispatch
 } = props 
 // 搜索内容 redux 解决共享状态问题 
 // 1. 搜索列表 api  action  redux 
 const [query, setQuery] = useState('')
 const [show, setShow] = useState(false);

 const searchBack = () => {
     setShow(false);
 }

 useEffect(() => {
     setShow(true)
     if (!hotList.length) {
         getHotKeywordsDispatch()
     }
 }, [])

 const handleQuery = (q) => {
     // console.log(q)
     setQuery(q)
 }

 useEffect(() => {
     // console.log(query, '-------------------')
     if (query.trim()) {
         // 有必要去请求
         changeEnterLoadingDispatch(true);
         getSuggestListDispatch(query)
     }
 }, [query])

 const renderHotkey = () => {
    let list = hotList ? hotList : [];
    // console.log(list);
    return (
        <ul>
            {
                list.map(item => {
                    return (
                        <li className='item' key={item.first} onClick={() => {setQuery(item.first)}}>
                            <span>
                                {item.first}
                            </span>
                        </li>
                    )
                })
            }
        </ul>
    )
 }

 const gotoSingers = (id) => {
    navigate(`/singer/${id}`)
 }

 const renderSingers = () => {
    let singers = suggestList.artists;
    if(!singers || !singers.length) return;
    console.log(singers,'---------------------------------')
    return (
        <List>
            <h1 className="title">相关歌手</h1>
            {
                singers.map((item,index) => {
                    return (
                        <ListItem key={item.accountId + "" + index} onClick={() => gotoSingers(item.id)}>
                            <div className="img_wrapper">
                                <Lazyload placeholder={
                                    <img src={singerImg} alt="music" width="100%" height="100%"/>
                                }>
                                    <img src={item.picUrl} alt="music" width="100%" height="100%"/>
                                </Lazyload>
                            </div>
                            <span className='name'>歌手：{item.name}</span>
                        </ListItem>
                    )
                })
            }
        </List>
    )
 }

 const gotoAlbum = (id) => {
    navigate(`/album/${id}`)
 }
 
 const renderAlbum = () => {
    let albums = suggestList.playlists
    // console.log(albums);
    // 不输入的时候就返回
    if(!albums) return
    return (
        <List>
            <h1 className="title">相关歌单</h1>
            {
                albums.map((item,index) => {
                    return (
                        <ListItem key={item.accountId + "" +index} onClick={() => gotoAlbum(item.id)}>
                            <div className="img_wrapper">
                                <Lazyload placeholder={
                                    <img src={musicImg} alt="music" width="100%" height="100%"/>
                                }>
                                    <img src={item.coverImgUrl} alt="" width="100%" height="100%"/>
                                </Lazyload>
                            </div>
                            <span className='name'>歌单：{item.name}</span>
                        </ListItem>
                    )
                })
            }
        </List>
    )
 }

 const renderSongs = () =>{
    return (
        <SongItem style={{paddingLeft:"1rem"}}>
            {
                songsList.map(item => {
                    return (
                    //   <li key={item.id} onClick={(e) => selectItem(e, item.id)}>
                      <li key={item.id}>
                        <div className="info">
                          <span>{item.name}</span>
                          <span>
                            { getName(item.artists) } - { item.album.name }
                          </span>
                        </div>
                      </li>
                    )
                  })
            }
        </SongItem>
    )
 }

 return (
     // 当dom ready 组件挂载上去， 应用css transiiton效果 
     <CSSTransition
         in={show}
         timeout={300}
         appear={true}
         classNames="fly"
         unmountOnExit
         onExit={() => {
             navigate(-1)
         }}
     >
         {/* sc-evZas bAobGr fly-enter fly-enter-active */}
         <Container play={songsCount}>
             <div className="search_box_wrapper">
                 <SearchBox 
                     back={searchBack}
                     newQuery={query}
                     handleQuery={handleQuery}>    
                 </SearchBox>
             </div>
             <ShortcutWrapper show={!query}>
                <Scroll>
                    <div>
                        <Hotkey>
                            <h1 className="title">————&ensp;&ensp;热门搜索&ensp;&ensp;————</h1>
                            { renderHotkey() }
                        </Hotkey>
                    </div>
                </Scroll>
             </ShortcutWrapper>
             <ShortcutWrapper show={query}>
                <Scroll onScroll={forceCheck}>
                    <div>
                        { renderSingers() }
                        { renderAlbum() }
                        { renderSongs() }
                    </div>
                </Scroll>
             </ShortcutWrapper>
         { enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
         </Container>
     </CSSTransition>
 )
}
const mapStateToProps = (state) => {
 return {
     // api 热搜
     hotList: state.search.hotList,
     enterLoading: state.search.enterLoading,
     // 搜索建议 卖广告
     suggestList: state.search.suggestList,
     // 就为跨模块共享数据而来， 共享好 
     songsCount: state.player.playList.length,
     songsList: state.search.songsList
 }
}
const mapDispatchToProps = (dispatch) => {
 return {
     getHotKeywordsDispatch() {
         dispatch(getHotKeyWords());
     },
     changeEnterLoadingDispatch(data) {
         dispatch(changeEnterLoading(data))
     },
     getSuggestListDispatch(data) {
         dispatch(getSuggestList(data))
     },
    //  getSongDetailDispatch(id) {
    //     dispatch(getSongDetail(id));
    // }
 }
}
export default connect(mapStateToProps, 
 mapDispatchToProps)(React.memo(Search))