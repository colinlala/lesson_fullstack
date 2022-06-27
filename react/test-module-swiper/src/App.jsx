import { useState } from "react";
import "./App.css";
import PPopup from "./popup";
import MModule from "./module";
import NNotice from "./notice";
import NNo from "./no";
import SSwiper from "./swiper";

function App() {
  return (
    <>
      <PPopup />
      <MModule />
      <NNotice />
      <NNo />
      <SSwiper />
    </>
  );
}

export default App;
