/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 19:53:36
 * @LastEditTime: 2022-05-25 20:26:59
 * @Description: 
 */
import React from "react";


const Editor = (props) => {

    const { updateEntity } = props;

    return (
        <div className="ui form">
            <div className="field">
                <textarea
                    rows="5"
                    placeholder="写点东西"
                    // react 非常接近原生js的框架
                    onInput={(event) => { updateEntity(event) }}
                />
            </div>
        </div>
    )
}

export default Editor;