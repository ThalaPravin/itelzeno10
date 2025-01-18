import React, { useState } from "react";
import bgImage from "../../assets/Zeno_10/display/bg.webp";
import bgMobile from "../../assets/Zeno_10/display/bgmobile.png";
import frame from "../../assets/Zeno_10/display/frame.png";

const Display = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimation = () => {
    if (window.innerWidth >= 1024) { 
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center flex-col overflow-hidden lg:flex-row items-center relative"
      style={{
        backgroundImage: `url(${bgImage}), radial-gradient(59.65% 59.65% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 76.68%, #000000 100%)`,
      }}
    >
     
      <div className="text-white flex flex-col justify-center items-start p-5 lg:w-1/3 relative z-10">
        <h1 className="font-markot font-extrabold italic tracking-[0.35em] mb-5">
          <span className="text-red-600">//</span> DISPLAY
        </h1>
        <h1 className="text-4xl lg:text-6xl font-extrabold font-clashdisplay">
          PURE <br />
          <span className="text-red-600">
            CINEMATIC <br />
          </span>
          EXPERIENCE
        </h1>
      </div>

  
      <div className="w-full  flex justify-center">
        <img
          src={bgMobile}
          alt="Display Mobile with Background"
          className={`w-[24rem]  md:w-[30rem] lg:w-[41.94rem] h-auto  transition-transform duration-2000 ${
            isAnimating ? "scale-[3]  z-50" : ""
          }`}
          onClick={handleAnimation}
        />
      </div>

    
      <div className="p-5 w-full lg:w-1/3 flex justify-center">
        <div className="relative w-[25.593rem]">
          <img className="absolute inset-0 bg-cover bg-center" src={frame} />
          <div className="relative flex flex-col items-center justify-center w-full h-[17.625rem]">
            <p className="text-white text-center font-markot text-xl md:text-base lg:text-lg">
              With an immersive{" "}
              <span className="text-red-600 font-bold">
                6.6" <br /> HD+ Drop Notch <br /> Display{" "}
              </span>{" "}
              with{" "}
              <span className="text-red-600 font-bold">
                Dynamic <br />
                Bar,{" "}
              </span>{" "}
              experience sharper <br /> visuals and richer colors <br /> that
              ensures everything <br />
              looks cinematic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
