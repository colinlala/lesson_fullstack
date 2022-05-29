/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 19:52:43
 * @LastEditTime: 2022-05-29 22:55:47
 * @Description: 
 */
import React, { useState } from "react";
import _, { words } from 'lodash';
// 时间
import moment from 'moment';  // 时间库
import 'moment/src/locale/zh-cn';  // 中文日期
import Editor from "./Editor";
moment.locale('zh-CN')

const Note = (props) => {
    const [open, setOpen] = useState(false);  // 自有的  外面不用
    const { entity, destroyENtity } = props
    const { body, meta } = entity

    const updated = () => {
        // 1. 拿到entity 里面的meta 再里面的created | updated
        // 2. 格式化 时间戳变成可读性更好的时间
        return moment(meta.updated || meta.created).fromNow();
    }
    const header = () => {
        //  不多于30个字    大于30个字的缩掉（lodash工具库）
        return _.truncate(body, { length: 30 }) || '新建笔记';
    }
    const toggle = () => {
        setOpen(!open)
    }
    const updateEntity = (event) => {
        console.log(event, '--------');
    }
    const words = () => {
        return body.length
    }
    return (
        <div className="item">
            <div className="meta">
                {/* 最后更新时间   */}
                {updated()}
            </div>
            <div className="content">
                <div className="header" onClick={toggle}>
                    {header()}
                </div>
            </div>
            <div className="extra">
                {
                    open &&
                    <Editor
                        entity={entity}
                        updateEntity={updateEntity}
                    />
                }
                {words()}字
                {
                    open &&
                    <i
                        className="right floated trash outline icon"
                        onClick={() => destroyENtity(entity)}
                    />
                }
            </div>
        </div>

    )
}

export default Note;