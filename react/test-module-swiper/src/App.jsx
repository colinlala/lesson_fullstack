import { useState } from "react";
import { Button, Modal, Space, Toast, Divider, Popup } from "antd-mobile";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Space direction="vertical">
        <Button
          onClick={() => {
            setVisible(true);
          }}
        >
          圆角的弹出层
        </Button>
        <Popup
          visible={visible}
          onMaskClick={() => {
            setVisible(false);
          }}
          showCloseButton
          // 关闭
          onClose={() => {
            setVisible(false);
          }}
          bodyStyle={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            minHeight: "80vh",
          }}
        >
          {"123123123131231231231231231232s"}
        </Popup>
      </Space>
    </>
  );
}

export default App;
