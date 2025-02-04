import React from "react";
import bg from "../../../assets/Zeno_10/3_KSPs/Glassmorphism.png";
import logo from "../../../assets/Zeno_10/3_KSPs/secondksp.png";

const SecondKsp = () => {
  return (
    <div className="lg:w-[25.593rem] w-[22.5rem relative">
      <img className="absolute inset-0 bg-cover bg-center backdrop-blur-lg" src={bg}></img>

      <div className="relative flex flex-col items-center justify-center w-full h-[17.625rem]">
        <img src={logo} alt="Logo" className="mb-4 w-9" />
        <p className="text-white text-center font-clashdisplay text-2xl tracking-widest">
          <span className="text-red-600">64 GB MEMORY </span> FOR <br /> ALL YOUR APPS
          <br /> GAMES AND MEMORIES
        </p>
      </div>
    </div>
  );
};

export default SecondKsp;
