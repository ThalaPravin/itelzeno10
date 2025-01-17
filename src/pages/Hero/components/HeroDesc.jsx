import React from "react";
import Symbol from "../../../assets/Zeno_10/HeroDesc/symbol.webp";
import Zeno10Logo from "../../../assets/Zeno_10/HeroDesc/zeno10.png";
import BuyNowBtn from "../../../assets/Zeno_10/HeroDesc/BuyNowbutton.png";

const HeroDesc = () => {
  return (
    <div className="flex flex-col gap-6 justify-start items-center h-screen  mt-0 z-50 ">
      
      <img src={Symbol} alt="Zeno 10 Symbol" className="w-36 " />
      <img src={Zeno10Logo} alt="Zeno 10 Logo" className="w-1/3" />

      <div className=" hidden md:block lg:block text-xl lg:text-2xl text-white ml-5 lg:ml-0 font-markot items-center justify-center">
        6.6" HD+ Display with Dynamic Bar | 5000mAh Massive Battery | 64GB Big
        Memory
      </div>

      <div className="lg:hidden md:hidden text-xl lg:text-2xl text-white ml-5 lg:ml-0 font-markot items-center justify-center">
       <p className="text-center"> 6.6" HD+ Display with Dynamic Bar | </p>
       <p className="text-center">5000mAh Massive Battery |</p>
        <p className="text-center">64GB Big
        Memory</p>
      </div>

      <div className="text-base text-white font-markot">
        <p> A better vision for the future that holds.</p>
      </div>

      <div className="flex justify-center items-center gap-10 mt-7">
        <img
          src={BuyNowBtn}
          alt="Buy Now Button"
          className="w-[161.76px] h-[48px] hidden md:block lg:block"
        />
        <div className="">
            <p className="text-white text-xl">Available at <span className="font-bold">₹5,699/-</span></p>
        </div>
      </div>
    </div>
  );
};

export default HeroDesc;
