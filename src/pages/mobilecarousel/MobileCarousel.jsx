import React, { useState } from "react";
import glassmorphism from "../../assets/Zeno_10/mobilecarousal/glassmorphism.png";
import purpleMobile from "../../assets/Zeno_10/mobilecarousal/purple.png";
import greenMobile from "../../assets/Zeno_10/mobilecarousal/green.png";

const MobileCarousel = () => {
  const data = [
    { color: "Opal Purple", image: purpleMobile, code: "#9B87F3" },
    { color: "Green", image: greenMobile, code: "#0D3314" },
  ];

  const [selectedColor, setSelectedColor] = useState(data[0]);

  return (
    <div className=" hidden md:block lg:block w-full bg-black overflow-hidden flex justify-center items-center flex-col h-screen font-clashdisplay tracking-wider mt-36">
      <div className="flex flex-col w-full  justify-center items-center">
        <img
          className="absolute inset-x-0 w-4/5  bg-cover bg-center backdrop-blur-xl  z-0 items-center lg:m-auto"
          src={glassmorphism}
          alt="Glassmorphism"
        />

        <div className=" rounded-2xl p-6 shadow-lg z-10 ">
          <img
            src={selectedColor.image}
            alt={selectedColor.color}
            className="w-60 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center items-center gap-9 font-">
        <div className="mt-6 flex items-center gap-4">
          <span className="text-white font-medium uppercase">Color</span>
        </div>

        <div className="mt-4 px-4 py-2 border-2 border-red-600 rounded-full flex items-center justify-center gap-4">
          <span className="text-white font-semibold uppercase">
            {selectedColor.color}
          </span>
          <span
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: selectedColor.code }}
          ></span>
        </div>

        <div className="flex items-center gap-2 mt-6">
          {data.map((item, index) => (
            <button
              key={index}
              className={`w-7 h-7 rounded-full border-2 ${
                selectedColor.color === item.color
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: item.code }}
              onClick={() => setSelectedColor(item)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
