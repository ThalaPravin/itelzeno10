import React from "react";
import bg3 from "../../assets/Zeno 10/hero/bghero.jpg";
import purplePhone from "../../assets/Zeno 10/hero/purple.png";
import purpleScreen from "../../assets/Zeno 10/hero/purpleScreennew.png";
import greenPhone from "../../assets/Zeno 10/hero/green.png";
import HeroDesc from "./components/HeroDesc";

const Hero = () => {
  return (
    <div className="bg-black">
      <div
        className="relative w-full min-h-screen bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <img
          src={purplePhone}
          alt="Purple Phone Left"
          className={`absolute left-[15%] sm:left-[15%] md:left-[25%] w-32 sm:w-52 md:w-64 lg:w-80 transform -rotate-[30deg] z-20  ${
            window.innerWidth >= 1024
              ? "animate-fadeLeft -bottom-48"
              : "bottom-96"
          }`}
        />

        <img
          src={purpleScreen}
          alt="Purple Phone Middle"
          className={`absolute left-1/2 -translate-x-1/2 w-36 sm:w-64 md:w-80 lg:w-96 z-30 ${
            window.innerWidth >= 1024
              ? "animate-fadeUp -bottom-48"
              : "bottom-96"
          }`}
        />

        <img
          src={greenPhone}
          alt="Green Phone Right"
          className={`absolute right-[15%] sm:right-[15%] md:right-[25%] w-32 sm:w-52 md:w-64 lg:w-80 transform rotate-[30deg] z-20 ${
            window.innerWidth >= 1024
              ? "animate-fadeRight -bottom-48"
              : "bottom-96"
          }`}
        />

        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 scale-[1.2] z-10"
          style={{ backgroundImage: `url(${bg3})` }}
        ></div>
        <div className="absolute inset-0 bg-center bg-cover transition-transform duration-500 scale-[1.2] z-10 backdrop-blur-[2px]"></div>

        <div className="z-50 absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="relative  bottom-80 lg:bottom-0 z-50">
        <HeroDesc />
      </div>
    </div>
  );
};

export default Hero;
