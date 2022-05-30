/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-28 19:46:57
 * @LastEditTime: 2022-05-28 19:55:59
 * @Description: 
 */
import React from "react";


const Loader = ({ message }) => {
    return (
        <div className="loader">
            <img src="" alt="loading..." />
            <h2>{message}</h2>
        </div>
    )
}

export default Loader
