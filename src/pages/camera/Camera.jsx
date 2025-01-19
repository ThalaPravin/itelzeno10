import React from "react";
import cameraIcon from "../../assets/Zeno_10/camera/camera_withbg.png";

const Camera = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-red z-10">
      <div>
        <div className="text-white lg:px-24 lg:flex justify-center items-center">
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
  );
};

export default Camera;
