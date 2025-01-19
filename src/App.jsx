import { useState } from "react";
import Hero from "./pages/Hero/Hero.jsx";
import ZenoHeader from "./pages/zenoheader/ZenoHeader.jsx";
import ZenoIconVideo from "./pages/colormobile/ZenoIconVideo.jsx";
import KSP from "./pages/3KSP's/KSP.jsx";
import Display from './pages/display/display';
import Battery from "./pages/battery/Battery.jsx";
import Performance from "./pages/performance/Performance.jsx";
import Storage from "./pages/storage/Storage.jsx";
import DynamicBar from "./pages/dynamicbar/DynamicBar.jsx";

function App() {
  return (
    <>
      <div className="w-full  bg-black overflow-hidden">
        <Hero />
        <ZenoHeader />
        <ZenoIconVideo />
        <KSP />
        <Display />
        <Battery/>
        <Performance />
        <Storage/>
        <DynamicBar/>

        <div className="w-full h-screen bg-black"></div>
      </div>
    </>
  );
}

export default App;
