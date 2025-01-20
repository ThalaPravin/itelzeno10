import React from "react";
import FeaturesBar from "./components/FeaturesBar";
import mobile1 from "../../assets/Zeno_10/camera/mobile1.png";
import mobile2 from "../../assets/Zeno_10/camera/mobile2.png";
import logo from "../../assets/Zeno_10/camera/logo.jpeg";
import FiveMpGlass from "./components/FiveMpGlass";
import FaceLockGlass from "./components/FaceLockGlass";
import EightMpGlass from "./components/EightMpGlass";
import FingerPrintGlass from "./components/FingerPrintGlass";
import cameraIcon from "../../assets/Zeno_10/camera/camera_withbg.png";
import backCoverIcon from "../../assets/Zeno_10/camera/backcover.png";

function Camera() {
  return (
    <>
      <div className="lg:mt-20 mt-8  w-full flex flex-col items-center justify-center bg-red z-10">
        <div>
          <div className="text-white lg:px-24 lg:flex justify-center items-center px-4">
            <div className="w-full">
              <h1 className="font-markot font-extrabold italic tracking-[0.1em] sm:tracking-[0.35em] mb-3 sm:mb-5 text-base  lg:text-xl">
                <h1 className="font-markot font-extrabold italic tracking-[0.35em] mb-2">
                  <span className="text-red-600">//</span>CAMERA
                </h1>
              </h1>
              <h1 className="text-5xl  md:text-4xl lg:text-6xl font-extrabold font-clashdisplay">
                GO
                <span className="text-red-600"> BEYOND LIMITS</span>
                <br />
                IN EVERY SHOT
              </h1>
            </div>

            <div className="relative flex flex-col justify-center lg:px-12 w-full h-[15rem]  text-white ">
              <p className="text-white font-markot text-lg md:text-lg lg:text-xl lg:mt-4  tracking-wide">
                Zeno 10 is built to capture the smallest details with
                <span className="text-itel-red font-bold">
                  {" "}
                  unmatched clarity{" "}
                </span>{" "}
                and brilliant{" "}
                <span className="text-itel-red font-bold">
                  color vibrancy{" "}
                </span>{" "}
                so you can capture the same smooth clarity as shooting stars.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={cameraIcon} alt="Camera Icon" className="w-full" />
        </div>
      </div>
      <div className="text-white min-h-screen flex flex-col justify-between overflow-hidden gap-72 lg:gap-0">
        <FeaturesBar />
        <div className="relative w-full">
          <img
            src={logo}
            className="hidden lg:block absolute bottom-[2rem] w-[32rem] rotate-45 -left-[6rem] opacity-30 z-30"
            alt=""
          />
          <img
            src={logo}
            className="hidden lg:block absolute bottom-[2rem] w-[32rem] -rotate-45 -right-[6rem] opacity-30 z-30"
            alt=""
          />
          <img
            src={mobile1}
            className="w-[250px] lg:w-[30rem] absolute bottom-0 left-[10%] md:left-[30%] lg:left-1/3 z-50"
            alt=""
          />
          <img
            src={mobile2}
            className="w-[450px] lg:w-[45rem] absolute bottom-0 left-[10%] md:left-[30%] lg:left-[35%] z-50"
            alt=""
          />
          <FiveMpGlass />
          <FaceLockGlass />
          <EightMpGlass />
          <FingerPrintGlass />
        </div>
        <div className="hidden md:block lg:block bg-red-600 py-3 text-white text-center flex justify-center items-center ">
          <span className="text-lg font-bold tracking-[0.9em] font-clashdisplay">
            GET THIS ATTRACTIVE BACK COVER FOR FREE
          </span>
        </div>
      </div>
    </>
  );
}

export default Camera;
