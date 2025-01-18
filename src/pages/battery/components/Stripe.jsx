import React from 'react';
import zenoicon from "../../../assets/Zeno_10/battery/zenoicon.png";

const Stripe = () => {
    return (
        <div className="h-12 overflow-hidden flex items-center text-white font-clashdisplay tracking-wider text-lg text-center items-center justify-center overflow-hidden">
            <div className="flex overflow-hidden ">
                <img src={zenoicon} alt="zenoicon" className="h-6 mx-2" />
                <span className="mx-2">ELEVATED EXPERIENCE</span>
                <img src={zenoicon} alt="zenoicon" className="h-6 mx-2" />
                <span className="mx-2">NUANCED CONTROLS</span>
                <img src={zenoicon} alt="zenoicon" className="h-6 mx-2" />
                <span className="mx-2">OPTIMIZED OUTPUT</span>
                <img src={zenoicon} alt="zenoicon" className="h-6 mx-2" />
                <span className="mx-2">ELEVATED EXPERIENCE</span>
                <img src={zenoicon} alt="zenoicon" className="h-6 mx-2" />
                <span className="mx-2">NUANCED CONTROLS</span>
                
            </div>
        </div>
    );
};

export default Stripe;
