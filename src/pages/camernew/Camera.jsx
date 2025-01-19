import React from "react";
import FeaturesBar from "./components/FeaturesBar";
import mobile1 from "../../assets/Zeno_10/camera/mobile1.png";
import mobile2 from "../../assets/Zeno_10/camera/mobile2.png";
import logo from "../../assets/Zeno_10/camera/logo.jpeg";
import FiveMpGlass from "./components/FiveMpGlass";
import FaceLockGlass from "./components/FaceLockGlass";
import EightMpGlass from "./components/EightMpGlass";
import FingerPrintGlass from "./components/FingerPrintGlass";

function Camera() {
	return (
		<div className="text-white min-h-screen flex flex-col justify-between overflow-hidden gap-72 lg:gap-0">
			<FeaturesBar />
			<div className="relative w-full">
				<img
					src={logo}
					className="hidden lg:block absolute bottom-[2rem] w-[32rem] rotate-45 -left-[6rem] opacity-30 z-30"
					alt=""
				/>
				<img
					src={logo}
					className="hidden lg:block absolute bottom-[2rem] w-[32rem] -rotate-45 -right-[6rem] opacity-30 z-30"
					alt=""
				/>
				<img
					src={mobile1}
					className="w-[250px] lg:w-[30rem] absolute bottom-0 left-[10%] md:left-[30%] lg:left-1/3 z-50"
					alt=""
				/>
				<img
					src={mobile2}
					className="w-[450px] lg:w-[45rem] absolute bottom-0 left-[10%] md:left-[30%] lg:left-[35%] z-50"
					alt=""
				/>
				<FiveMpGlass />
				<FaceLockGlass />
				<EightMpGlass />
				<FingerPrintGlass />
			</div>
		</div>
	);
}

export default Camera;
