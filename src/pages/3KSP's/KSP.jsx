import React from 'react';
import FirstKSP from './components/FirstKsp';
import SecondKSP from './components/SecondKsp';
import ThirdKSP from './components/ThirdKsp';
import bg from '../../assets/Zeno_10/3_KSPs/bg.webp';

const KSP = () => {
    return (
        <div 
            className='flex justify-center items-center lg:ml-5 px-5 lg:px-0 py-5 lg:py-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full h-screen bg-cover bg-center' 
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            <FirstKSP />
            <SecondKSP />
            <ThirdKSP />
        </div>
    );
};

export default KSP;
