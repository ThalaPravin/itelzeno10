import { useState } from "react";
import Hero from "./pages/Hero/Hero.jsx";
import ZenoHeader from "./pages/zenoheader/ZenoHeader.jsx";

function App() {
  return (
    <>
      <div className="w-full  bg-black">
        <Hero />
        <ZenoHeader />

        <div className="w-full h-screen bg-black"></div>
      </div>
    </>
  );
}

export default App;
