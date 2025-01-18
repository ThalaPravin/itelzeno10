import React from 'react';
import bg from '../../../assets/Zeno_10/3_KSPs/Glassmorphism.png';
import logo from '../../../assets/Zeno_10/3_KSPs/thirdksp.png';

const ThirdKsp = () => {
  return (
    <div className="w-[25.593rem] relative">
        
         <img
           className="absolute inset-0 bg-cover bg-center backdrop-blur-lg"
           src= {bg}
         ></img>
           
         <div className="relative flex flex-col items-center justify-center w-full h-[17.625rem]">
           <img src={logo} alt="Logo" className="mb-4 w-9" />
           <p className="text-white text-center font-clashdisplay text-2xl tracking-widest">
           POWERFUL<span className="text-red-600"> 5000MAH</span> <br />
             <span className="text-red-600">BATTERY</span> DESIGNED<br /> TO LAST ALL DAY
           </p>
         </div>
       </div>
  );
};

export default ThirdKsp;
