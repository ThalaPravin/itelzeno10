import React from "react";
import fivemp from "../../../assets/Zeno_10/camera/5mp.png";

function FiveMpGlass() {
	return (
		<div
			className="absolute h-[7.5rem] lg:h-48 bg-cover left-5 lg:left-40 bottom-[22rem] lg:bottom-56 p-6 lg:p-12 z-50 backdrop-blur-lg"
			style={{ backgroundImage: `url(${fivemp})` }}
		>
			<p className="text-4xl lg:text-6xl font-extrabold font-clashdisplay">
				<span className="text-itel-red">5</span>
				<span className="text-white">MP</span>
			</p>
			<p className="text-2xl lg:text-4xl font-extrabold font-clashdisplay">
				<span className="text-white">FRONT SELFIE</span>
			</p>
		</div>
	);
}

export default FiveMpGlass;
