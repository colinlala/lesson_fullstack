// 映入react框架,叫React
// import from  es6 模块化方案
// react + react-dom 
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';  // css也可以用import
import App from './App';  // 引入了根组件模块


ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <App></App>
)