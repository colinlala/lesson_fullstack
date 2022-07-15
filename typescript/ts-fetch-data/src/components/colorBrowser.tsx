import React from "react";
import { Color } from "../model/color";

interface Props {
  color: Color;
}

const colorBrowser: React.FC<Props> = (props) => {
  // @types/react
  const divStyle: React.CSSProperties = {
    width: "11rem",
    height: "7rem",
    background: `rgb(${props.color.red},${props.color.green},${props.color.blue})`,
  };
  return (
    <div style={divStyle}></div>
    )
};
export default colorBrowser;
