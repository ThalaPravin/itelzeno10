import React, { useRef } from 'react';
import videoLarge from '../../assets/Zeno_10/zenotextual/desktop.mp4';
import videoSmall from '../../assets/Zeno_10/zenotextual/mobile.mp4';

const ZenoTextual = () => {
    const largeVideoRef = useRef(null);
    const smallVideoRef = useRef(null);

    const handleVideoClick = (videoRef) => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };

    return (
        <div className="w-full h-screen items-center justify-center flex">
            <video
                ref={largeVideoRef}
                className="hidden lg:block md:block w-full h-full object-cover"
                src={videoLarge}
                muted
                onClick={() => handleVideoClick(largeVideoRef)}
            />
            <video
                ref={smallVideoRef}
                className="block lg:hidden md:hidden w-full object-cover"
                src={videoSmall}
                muted
                onClick={() => handleVideoClick(smallVideoRef)}
            />
        </div>
    );
};

export default ZenoTextual;
