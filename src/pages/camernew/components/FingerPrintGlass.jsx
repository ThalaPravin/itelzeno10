import React from "react";
import fingerPrint from "../../../assets/Zeno_10/camera/fingerprint.png";

function FingerPrintGlass() {
	return (
		<div
			className="absolute h-[6.6rem] lg:h-[9.2rem] bg-cover right-5 lg:right-20 bottom-[26rem] lg:bottom-32 p-3 lg:p-6 z-50 backdrop-blur-lg"
			style={{ backgroundImage: `url(${fingerPrint})` }}
		>
			<p className="text-2xl lg:text-4xl flex flex-col font-extrabold font-clashdisplay">
				<span className="text-itel-red text-lg lg:text-2xl">SIDE</span>
				<span className="text-itel-red">FINGERPRINT</span>
			</p>
			<p className="text-2xl lg:text-4xl font-extrabold font-clashdisplay">
				<span className="text-white">UNLOCK</span>
			</p>
		</div>
	);
}

export default FingerPrintGlass;
