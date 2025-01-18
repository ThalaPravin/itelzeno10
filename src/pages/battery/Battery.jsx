import React from "react";
import zenoicon from "../../assets/Zeno_10/battery/zenoicon.png";
import glassmorphism from "../../assets/Zeno_10/battery/glassmorphism.png";
import battery from "../../assets/Zeno_10/battery/battery.webp";

const Battery = () => {
  return (
    <div className="relative w-screen h-screen bg-black">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 flex justify-between items-end">
        <div>
          <img src={zenoicon} alt="Zeno Icon" className="h-36 sm:h-48 lg:h-[18rem]" />
        </div>
        <div>
          <img
            src={battery}
            alt="Battery"
            className="w-40 sm:w-60 md:w-80 lg:w-[32rem]"
          />
        </div>
      </div>

      {/* Foreground Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-start">
        <div className="w-full sm:w-3/4 md:w-1/2 px-5 sm:px-10 md:ml-20 relative">
          <img
            className="absolute inset-0 bg-cover bg-center backdrop-blur-lg"
            src={glassmorphism}
            alt="Glassmorphism"
          />
          <div className="relative flex flex-col justify-center px-5 sm:px-12 lg:px-24 mt-6 sm:mt-9 w-full h-[15rem] sm:h-[17.625rem] text-white">
            <h1 className="font-markot font-extrabold italic tracking-[0.2em] sm:tracking-[0.35em] mb-3 sm:mb-5 text-lg sm:text-xl lg:text-2xl">
              <span className="text-red-600">//</span> BATTERY
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-clashdisplay">
              NON STOP POWER, <br />
              <span className="text-red-600">
                INSPIRED BY YOU <br />
              </span>
            </h1>
            <p className="text-white font-markot text-sm sm:text-base md:text-lg lg:text-xl mt-4 sm:mt-6 tracking-wide">
              Designed for those who live life on the go, Zeno is packed with a
              massive
              <span className="text-itel-red font-bold"> 5000mAh battery</span>,
              ensuring you stay connected, entertained, and productive all day
              long.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Battery;
