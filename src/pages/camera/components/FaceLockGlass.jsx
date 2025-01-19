import React from "react";
import facelock from "../../../assets/Zeno_10/camera/facelok.png";

function FaceLockGlass() {
	return (
		<div
			className="absolute w-[16rem] lg:w-[23rem]  bg-cover left-5 lg:left-40 bottom-64 lg:bottom-24 p-3 lg:p-6 z-50 backdrop-blur-lg"
			style={{ backgroundImage: `url(${facelock})` }}
		>
			<p className="text-xl lg:text-2xl font-extrabold font-clashdisplay">
				<span className="text-itel-red">WITH</span>
			</p>
			<p className="text-2xl lg:text-4xl font-extrabold font-clashdisplay">
				<span className="text-itel-red">FACE </span>
				<span className="text-white">UNLOCK</span>
			</p>
		</div>
	);
}

export default FaceLockGlass;
