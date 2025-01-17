
import React from 'react';
import Zeno10Logo from "../../../assets/Zeno_10/HeroDesc/zeno10.png";
import Symbol from "../../../assets/Zeno_10/HeroDesc/symbol.webp";

const LeftFrame = () => {
    return (
        <div className="flex flex-row items-center space-x-4">
            <img src={Symbol} alt="Symbol " className='lg:w-16 md:w-16 w-[38px]' />
            <img src={Zeno10Logo} alt="Zeno 10 Logo" className='lg:w-[154px] md:w-[154px] w-[104.24px]' />
        </div>
    );
};

export default LeftFrame;