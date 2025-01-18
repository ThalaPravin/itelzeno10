import React, { useEffect, useState } from "react";
import unisocBg from "../../assets/Zeno_10/performance/unisoc_BG_2.png";
import gbramBg from "../../assets/Zeno_10/performance/12gbram_bg.png";
import androidBg from "../../assets/Zeno_10/performance/android_bg.png";
import unisoc from "../../assets/Zeno_10/performance/unisoc.webp";
import gbram from "../../assets/Zeno_10/performance/12gbram.webp";
import android from "../../assets/Zeno_10/performance/android_go.webp";
import smallGlass from "../../assets/Zeno_10/performance/small_glass.png";
import rectangle from "../../assets/Zeno_10/performance/rectangle_bg_mobile.png";
import arrowLeft from "../../assets/Zeno_10/performance/arrowleft.png";
import arrowRight from "../../assets/Zeno_10/performance/arrowright.png";

function Performance() {
	const [current, setCurrent] = useState(0);

	const data = [
		{
			title: "UNISOC T603",
			titleDescription: "OCTA-CORE PROCESSOR",
			description: (
				<p className="font-markot text-base text-gray-300 [word-spacing:10px]">
					Powered by <span className="text-white">UNISOC T603</span> Octa-Core Processor,
					Zeno 10 is built to handle everything from gaming to multitasking with ease,
					delivering a seamless balance of{" "}
					<span className="text-red-600">speed, performance, and efficiency.</span>
				</p>
			),
			image: unisoc,
			bgImage: unisocBg,
		},
		{
			title: "12GB*RAM",
			titleDescription: "WITH MEMORY FUSION TECHNOLOGY",
			description: (
				<p className="font-markot text-base text-gray-300 [word-spacing:10px]">
					Seamlessly handle apps and tasks with{" "}
					<span className="text-red-600">12GB RAM (4GB+ BGB expandable RAM)</span>,
					ensuring smooth and lag-free performance. Enjoy quicker app launches and reduced
					load times, even for resource-intensive apps.
				</p>
			),
			image: gbram,
			bgImage: gbramBg,
		},
		{
			title: "ANDROID 14.0 GO EDITION",
			titleDescription: "WITH HIOS 14",
			description: (
				<p className="font-markot text-base text-gray-300 [word-spacing:10px]">
					Built to deliver a faster, smoother, and more reliable experience. Ensuring Zeno
					operates at peak performance, providing improved rendering capabilities, reduced
					app load times, and optimized power efficiency
				</p>
			),
			image: android,
			bgImage: androidBg,
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev + 1) % data.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [data.length]);

	const handlePrev = () => {
		setCurrent((prev) => (prev - 1 + data.length) % data.length);
	};

	const handleNext = () => {
		setCurrent((prev) => (prev + 1) % data.length);
	};

	return (
		<div className="relative min-h-screen">
			<div className="absolute h-1/2 md:h-screen w-full md:w-1/2 md:-left-60 bottom-0 md:-bottom-16 md:p-24 overflow-hidden">
				<div
					className="h-full flex-grow bg-cover bg-top md:bg-right z-30 scale-125 transition-all duration-700 ease-in-out"
					style={{ backgroundImage: `url(${data[current].bgImage})` }}
				></div>
			</div>
			<div className="px-6 md:px-24 py-12 h-full flex flex-col gap-14">
				<div className="md:flex text-white justify-between items-end z-50">
					<div className="text-center md:text-left">
						<h1 className="font-markot font-extrabold italic tracking-[0.35em] mb-2">
							<span className="text-red-600">//</span>PERFORMANCE
						</h1>
						<h1 className="text-3xl  md:text-6xl font-extrabold font-clashdisplay">
							SEAMLESS <br /> <span className="text-red-600">MULTITASKING</span>.
						</h1>
					</div>
					<div className="w-full text-center md:w-[30rem] text-xl [word-spacing:10px] text-gray-300">
						<p>
							Experience powerfully fast, lag-free performance with minimal load
							times. With <span className="text-itel-red">Smart optimization</span>,
							Zeno ensures every task runs flawlessly, no matter how demanding.
						</p>
					</div>
				</div>
				<div className="w-full flex flex-col justify-center">
					<div className="w-full flex flex-col md:flex-row text-white justify-center items-center md:justify-between z-50">
						<div className="relative w-[400px] h-[200px] md:h-[400px] md:w-[700px] overflow-hidden">
							{data.map((item, index) => (
								<img
									key={index}
									src={item.image}
									className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
										index === current ? "opacity-100" : "opacity-0"
									}`}
									alt={item.title}
								/>
							))}
						</div>
						<div className="flex-grow">
							<div
								className="hidden h-full flex-grow bg-contain bg-no-repeat bg-right z-30 md:flex justify-end items-center transition-opacity duration-700 ease-in-out"
								style={{ backgroundImage: `url(${smallGlass})` }}
							>
								{data.map((item, index) => (
									<div
										className={`w-[31rem] h-96 flex flex-col gap-4 p-10 transition-opacity duration-700 ease-in-out ${
											index === current
												? "opacity-100"
												: "opacity-0 pointer-events-none"
										}`}
										style={{
											position: index === current ? "relative" : "absolute",
										}}
										key={index}
									>
										<h1 className="text-xl font-extrabold font-markot text-red-600 border-l-2 border-red-600 pl-4">
											{item.title} <br />
											<span className="text-gray-300 text-xl font-normal">
												{item.titleDescription}
											</span>
										</h1>
										{item.description}
									</div>
								))}
							</div>
							<div
								className="md:hidden h-full flex-grow bg-contain bg-no-repeat bg-center z-30 flex justify-end items-center transition-opacity duration-700 ease-in-out backdrop-blur-lg"
								style={{ backgroundImage: `url(${rectangle})` }}
							>
								{data.map((item, index) => (
									<div
										className={`w-full flex flex-col gap-4 p-10 transition-opacity duration-700 ease-in-out ${
											index === current
												? "opacity-100"
												: "opacity-0 pointer-events-none"
										}`}
										style={{
											position: index === current ? "relative" : "absolute",
										}}
										key={index}
									>
										<h1 className="text-xl font-extrabold font-markot text-red-600 border-l-2 border-red-600 pl-4">
											{item.title} <br />
											<span className="text-gray-300 text-xl font-normal">
												{item.titleDescription}
											</span>
										</h1>
										{item.description}
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="w-full mt-5 flex justify-center">
						<div className="flex gap-5">
							<img
								src={arrowLeft}
								className="w-10 h-10 cursor-pointer"
								alt="Previous"
								onClick={handlePrev}
							/>
							<img
								src={arrowRight}
								className="w-10 h-10 cursor-pointer"
								alt="Next"
								onClick={handleNext}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Performance;
