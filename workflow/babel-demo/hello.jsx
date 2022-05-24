/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 20:23:03
 * @LastEditTime: 2022-05-23 20:37:03
 * @Description: 
 */
import React from "react";
import ReactDOM from "react-dom/client";
// JSX React用来描述UI
// 转义的过程
// JSX -> 页面上运行的
const Hello = () => <div>Hello World!</div>;
ReactDOM.createRoot(document.getElementById('root')).render(
    <Hello />
)

// .\node_modules\.bin\babel hello.jsx -o hello.js 转义js文件