import React from 'react';
import videoFile from '../../assets/Zeno_10/Zeno_icon_video/Zeno_icon_video.webm';

const ZenoIconVideo = () => {
    return (
        <div className="lg:w-full lg:h-screen w-full h-[22.5rem] flex items-center justify-center">
            <video className="lg:w-full lg:h-full md:h-full md:w-full w-full h-[22.5rem] object-cover" autoPlay loop muted>
                <source src={videoFile} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default ZenoIconVideo;
