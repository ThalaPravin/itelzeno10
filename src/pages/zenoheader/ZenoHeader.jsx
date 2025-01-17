import React from 'react';
import LeftFrame from './components/LeftFrame.jsx'; 
import BuyNowButton from './components/BuyNowButton.jsx'; 

const ZenoHeader = () => {
  return (
    <div className="flex justify-between items-center bg-[#242424] text-white px-4 py-2 w-full h-24 p-3 lg:px-20 md:px-16 px-3 font-markot font-base lg:mt-20 md:mt-16">
      <LeftFrame />
      <div className=" hidden lg:block md:block flex space-x-8 text-base font-markot">
        <button className="font-bold">Overview</button>
        <button className="hover:font-bold">Specifications</button>
      </div>
      <BuyNowButton />
    </div>
  );
};

export default ZenoHeader;
