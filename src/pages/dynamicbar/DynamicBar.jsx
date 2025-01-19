import React from "react";
import frame from "../../assets/Zeno_10/dynamicbar/frame.png";
import glassmorphism from "../../assets/Zeno_10/dynamicbar/Glassmorphism.png";
import gamePlayVideo from "../../assets/Zeno_10/dynamicbar/gameplay.webm";

const DynamicBar = () => {
    return (
        <div className="relative w-screen h-screen bg-black">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={gamePlayVideo}
                autoPlay
                loop
                muted
            ></video>

            <div className="absolute inset-0 bg-gradient-to-t  from-black via-transparent to-black opacity-78 z-10 "></div>
            <div className="absolute inset-0 bg-gradient-to-l  from-black via-transparent to-black opacity-78 z-10 "></div>

            <div className="absolute inset-0 z-10 flex items-center justify-center lg:px-12">
                <div className="text-white lg:px-5">
                    <h1 className="font-markot font-extrabold italic tracking-[0.2em] sm:tracking-[0.35em] mb-3 sm:mb-5 text-lg sm:text-xl lg:text-2xl">
                        <span className="text-red-600">//</span> DYNAMIC BAR
                    </h1>
                    <h1 className="text-2xl  md:text-4xl lg:text-6xl font-extrabold font-clashdisplay">
                        INTUITIVE .<br /> SMART . <br /> 
                        <span className="text-red-600">
                            DYNAMIC 
                        </span>
                        .
                    </h1>
                </div>

                <div className="lg:w-1/3">
                        <img src={frame} alt="" />
                </div>

                <div className="lg:w-1/3 sm:w-3/4 md:w-1/2 px-5 md:px-0 md:ml-20 relative mx-2">
                    <img
                        className="absolute inset-0 w-50 bg-cover bg-center backdrop-blur-xl"
                        src={glassmorphism}
                        alt="Glassmorphism"
                    />
                    <div className="relative flex flex-col justify-center lg:px-12 w-full h-[15rem]  text-white ">
                        <p className="text-white font-markot text-sm sm:text-base md:text-lg lg:text-xl lg:mt-4  tracking-wide">
                            With <span className="text-itel-red font-bold">Dynamic Bar,</span>{" "}
                            get notified calls, and alerts in an unobtrusive way, so you never
                            miss what matters while enjoying everything that matters.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute inset-0 border-8 border-black opacity-50 pointer-events-none"></div>
        </div>
    );
};

export default DynamicBar;
