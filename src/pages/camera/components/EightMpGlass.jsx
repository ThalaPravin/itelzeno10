import React from "react";
import eightmp from "../../../assets/Zeno_10/camera/8mp.png";

function EightMpGlass() {
	return (
		<div
			className="absolute h-[6.5rem] lg:h-[10.5rem] bg-cover right-5 lg:right-20 bottom-[33rem] lg:bottom-72 p-6 lg:p-12 z-50 backdrop-blur-lg"
			style={{ backgroundImage: `url(${eightmp})` }}
		>
			<p className="text-4xl lg:text-6xl font-extrabold font-clashdisplay">
				<span className="text-itel-red">8</span>
				<span className="text-white">MP AI</span>
			</p>
			<p className="text-2xl lg:text-4xl font-extrabold font-clashdisplay">
				<span className="text-white">DUAL REAR</span>
			</p>
		</div>
	);
}

export default EightMpGlass;
