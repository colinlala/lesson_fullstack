import { useState } from "react";
import ColorPicker from "./components/colorPicker";
import ColorBrowser from "./components/colorBrowser";
import SidebarComponent from "./components/sidebarComponent";
import MemberTableComponent from "./components/memberTable";
import { Color } from "./model/color";

function App() {
  // 类型参数 T
  const [color, setColor] = useState<Color>({
    red: 12,
    green: 12,
    blue: 12,
  });
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="App">
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <div style={{ float: "left" }}>
        <button onClick={() => setVisible(!isVisible)}>Toggle Sidebar</button>
      </div>
      <SidebarComponent isVisible={isVisible}>
        <h1>Cool Scfi Movies</h1>
        <ul>
          <li><a href="#">Interstellar</a></li>
          <li><a href="#">Blade Runner</a></li>
          <li><a href="#">a space odyssey</a></li>
        </ul>
      </SidebarComponent>
      <MemberTableComponent />
    </div>
  );
}

export default App;
