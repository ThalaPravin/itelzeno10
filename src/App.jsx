import { useState } from "react";
import Hero from "./pages/Hero/Hero.jsx";
import ZenoHeader from "./pages/zenoheader/ZenoHeader.jsx";
import ZenoIconVideo from "./pages/colormobile/ZenoIconVideo.jsx";
import KSP from "./pages/3KSP's/KSP.jsx";

function App() {
  return (
    <>
      <div className="w-full  bg-black">
        <Hero />
        <ZenoHeader />
        <ZenoIconVideo />
        <KSP />

        <div className="w-full h-screen bg-black"></div>
      </div>
    </>
  );
}

export default App;
