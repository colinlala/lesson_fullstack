import React from "react";
import { Color } from "../model/color";

interface Props {
  color: Color;
  onColorUpdated: (color: Color) => void;
}

// value: any  放弃对value类型的控制，但是不能不控制（value）
const updateColor = (props: Props, colorId: keyof Color) => (value: any) => {
  props.onColorUpdated({
    // ...props.color
    ...props.color,
    [colorId]: value,
  });
};
// const updateColor1 = (colorId: keyof Color) => () => {};

const ColorPicker: React.FC<Props> = (props) => {
  //   updateColor1("red");
  //   updateColor1("blue");
  return (
    <div>
      <ColorSliderComponent
        value={props.color.red}
        onValueUpdated={updateColor(props, "red")}
      />
      <br />
      <ColorSliderComponent
        value={props.color.green}
        onValueUpdated={updateColor(props, "green")}
      />
      <br />
      <ColorSliderComponent
        value={props.color.blue}
        onValueUpdated={updateColor(props, "blue")}
      />
    </div>
  );
};

interface PropsColorSlider {
  value: number;
  onValueUpdated: (newValue: number) => void;
}
const ColorSliderComponent: React.FC<PropsColorSlider> = (props) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={(event) => props.onValueUpdated(+event.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
