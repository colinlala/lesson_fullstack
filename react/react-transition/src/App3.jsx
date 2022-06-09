/*
 * @Date         : 2022-06-09 19:15:34
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-09 20:30:14
 * @description  :
 */
import { useState, useEffect } from "react";
import "./App.css";
import _ from "lodash";

const Animation = (props) => {
  // console.log(props)

  const {
    animation = false, // 把props 的 animation解构出来 默认值设置为false
    transitionStyles = { enter: { opacity: 1 }, leave: { opacity: 0 } },
    children,
  } = props;

  // 函数运行的返回值
  const [status, setStatus] = useState(() => {
    if (animation) return "enter";
    else return "leave";
  });

  //
  useEffect(() => setStatus(animation ? "enter" : "leave"), [animation]);

  // children? 有就执行. 没有就不执行
  const prevStyle = children?.props?.style || {};

  // 变 'enter' 或者 'leave'
  const animateStyle = transitionStyles[status];

  // 添加动画样式 匀速
  const transitionStyle = { transition: `all 300ms ease-in-out` };

  // children的样式
  const styles = { ...prevStyle, ...animateStyle, ...transitionStyle };

  // return (
  //   <div>
  //     Animation
  //     {children}
  //   </div>
  // );

  // 同下
  // return React.cloneElement(
  //     React.children.only(children), 
  //     {
  //         style: {
  //           ...styles
  //         }
  //     }
  // )

  return (
    <div style={{...styles}}>
      {children}
    </div>
  )
};

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div className="container">
      <button onClick={() => setPlay(!play)}>切换</button>
      <Animation animation={play}>
        {/* 把这个div 放在Animation显示?  props.children */}
        <div className="box"></div>
      </Animation>
    </div>
  );
}

export default App;
