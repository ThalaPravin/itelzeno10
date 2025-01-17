import React from "react";
import arrowImage from "../../../assets/Zeno_10/hero/rightarrow.png";

const BuyNowButton = () => {
  return (
    <button className="flex items-center justify-center w-[162px] h-[48px] rounded-[24px] border-2 border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 boder border-[#EC1F26] border-2 font-markot font-bold">
      BUY NOW
      <img src={arrowImage} alt="arrow" className="ml-2 w-4 h-4" />
    </button>
  );
};

export default BuyNowButton;
