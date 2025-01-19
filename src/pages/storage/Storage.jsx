import React from "react";
import backgroundImage from "../../assets/Zeno_10/storage/bg.jpg";
import glassmorphism from "../../assets/Zeno_10/battery/Glassmorphism.png";

const Storage = () => {
  return (
    <div className="relative w-screen h-screen bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-78 z-10 "></div>

      <div className="absolute inset-0 z-10 flex items-center justify-start ">
        <div className="w-full sm:w-3/4 md:w-1/2 px-5 md:px-0 md:ml-20 relative mx-2">
          <img
            className="absolute inset-0 bg-cover bg-center backdrop-blur-xl"
            src={glassmorphism}
            alt="Glassmorphism"
          />
          <div className="relative flex flex-col justify-center px-5 px-0 mt-0 lg:px-24 md:px-0  sm:mt-9 w-full h-[15rem]  text-white lg:mt-14">
            <h1 className="font-markot font-extrabold italic   mb-3 sm:mb-5 text-lg sm:text-xl lg:text-lg font-markot font-extrabold italic tracking-[0.3em] mb-2">
              <span className="text-red-600">//</span>STORAGE
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-clashdisplay">
              FUTURE READY <br />
              <span className="text-red-600">
                POWER HOUSE <br />
              </span>
            </h1>
            <p className="text-white font-markot text-sm sm:text-base md:text-lg lg:text-xl lg:mt-4  tracking-wide">
              Whether you're editing videos, gaming in high-definition, or
              running demanding applications, Zeno delivers seamless performance
              every single time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
