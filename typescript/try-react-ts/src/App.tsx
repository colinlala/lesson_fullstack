import React, { useState, useEffect } from "react";
import "./App.css";
import { Color } from "./model/color";
import ColorBrowser from './ColorBrowser'

// 根组件没有特别需求，就不需要类型约束React.FC<>
const App = () => {
  // ts 为大型项目而来 容不了一点bug model
  // ts 用来做大型项目，每一步都严格，类型约束
  const [color,setColor] = useState<Color>({
    red:20,
    green:30,
    blue:40,
  });
  return (
    <>
      <ColorBrowser color={color}/>
    </>
  );
}

export default App;
