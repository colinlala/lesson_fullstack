import React from "react";
import { NoticeBar } from "antd-mobile";

export default function NNotice() {
  const text =
    "llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll";
  return (
    <>
      {/* <NoticeBar content="这条通知可以关闭" color="alert" closeable /> */}
      <NoticeBar content={text} color="alert" closeable />
    </>
  );
}
