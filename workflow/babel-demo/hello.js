"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-23 20:23:03
 * @LastEditTime: 2022-05-23 20:37:03
 * @Description: 
 */
// JSX React用来描述UI
// 转义的过程
// JSX -> 页面上运行的
var Hello = function Hello() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Hello World!");
};

_client["default"].createRoot(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement(Hello, null)); // .\node_modules\.bin\babel hello.jsx -o hello.js 转义js文件
