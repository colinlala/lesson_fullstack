import React from "react";
import { Swiper } from "antd-mobile";
const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div style={{ background: color }}>{index + 1}</div>
  </Swiper.Item>
));

export default function SSwiper() {
  return (
    <>
      <Swiper slideSize={70} trackOffset={15} loop stuckAtBoundary={false}>
        {items}
      </Swiper>
    </>
  );
}
