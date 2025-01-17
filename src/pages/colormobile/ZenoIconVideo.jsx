import React from 'react';
import videoFile from '../../assets/Zeno_10/Zeno_icon_video/Zeno_icon_video.webm';

const ZenoIconVideo = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <video className="w-full h-full object-cover" autoPlay loop muted>
                <source src={videoFile} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default ZenoIconVideo;
