/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 19:50:26
 * @LastEditTime: 2022-05-27 14:28:12
 * @Description: 
 */
import React, { useState, useEffect } from "react";
import Note from "./Note";
// import Editor from "./Editor";
import { db, localCollection } from '../database/index'

const Notes = () => {
    // MVVM
    const [notes, setNotes] = useState([])

    const destroyENtity = (entry) => {
        // console.log(entry)
        // 不是这一项的就留下  filter
        const _entities = notes.filter(
            item => item.$loki !== entry.$loki
        )
        // console.log(_entities)
        setNotes(_entities)
        localCollection('notes')
            .then(collection => {
                // 删除
                collection.remove(entry);
                // 再保存
                db.saveDatabase();
            })
    }

    // 不设key  可以先传index（不靠谱）
    // 对象数组变成了JSX数组
    const noteItems = notes.map(
        // (note, index) => <li key={index}>{note.body}</li>
        // 多条Note组成Notes，所以不需要map一条条遍历
        // $loki作为key
        (note) =>
            <Note
                key={note.$loki}
                entity={note}
                destroyENtity={destroyENtity} />
    )


    const createEntity = (event) => {

    }


    // 先把页面模板显示出来，静态部分先显示出来  
    // JSX -> babel + html/css渲染  花时间-组件挂载及渲染时间
    // 从数据库里面去取，无法保证谁先执行完，useEffect  
    // 再调用setNotes，列表就出来了  
    // console.log('1');   //  1先打印 
    const getInitialData = () => {
        localCollection('notes')
            .then(collection => {
                // console.log(collection);
                collection.insert([
                    { body: 'hello~' },
                    { body: '你好~' },
                ])
                const entities = collection.chain()  // 连接
                    .find()   // select * from orderby...
                    .simplesort('$loki', 'isdesc')   // 降序排序  desc
                    .data()
                // console.log(entities);
                setNotes(entities);
            })
    }
    useEffect(() => {
        // 组件挂载后执行   生命周期
        // console.log('2');
        getInitialData();  // 数据库
    }, [])

    return (
        <div className="ui container notes">
            <h4 className="ui horizontal divider header">
                {/* i放图标 */}
                <i className="paw icon" />
                Notes App _ React.js
            </h4>
            <button onClick={createEntity}
                className="ui right floated basic violet button">
                添加笔记
            </button>
            <div className="ui divided items">
                {noteItems}
            </div>
            {/* 父子组件的传值 */}
            {/* <Editor updateEntity={updateEntity} /> */}
        </div>
    )
}

export default Notes;