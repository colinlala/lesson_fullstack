import React from "react";
import { ConfigProvider, ErrorBlock } from "antd-mobile";
import zhCN from "antd-mobile/es/locales/zh-CN";

export default function NNo() {
  return (
    <>
      <ConfigProvider locale={zhCN}>
        <ErrorBlock status="disconnected" />
      </ConfigProvider>
    </>
  );
}
