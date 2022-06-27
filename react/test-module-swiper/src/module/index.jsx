import React from "react";
import { Button, Modal, Space } from "antd-mobile";

export default function MModule() {
  return (
    <>
      <Space direction="vertical" block>
        <Button
          block
          onClick={() => {
            Modal.show({
              content: "人在天边月上明，风初紧，吹入画帘旌",
              closeOnAction: true,
              actions: [
                {
                  key: "online",
                  text: "在线阅读",
                  primary: true,
                },
                {
                  key: "download",
                  text: "下载文件",
                },
                {
                  key: "share",
                  text: "分享",
                },
              ],
            });
          }}
        >
          自定义按钮
        </Button>
      </Space>
    </>
  );
}
