import React from "react";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="flex flex-col md:flex-row justify-around items-center py-10 bg-gray-100">
			<div className="bg-black text-white p-6 rounded-lg m-4 w-1/3">
				<Image
					src="/images/iphone-14.png"
					alt="iPhone 14"	
					width={500}
					height={500}
					className="mb-4"
				/>
				<h2 className="text-xl font-bold">iPhone 14 Series</h2>
				<p>Up to 10% off Voucher</p>
				<button className="mt-4 px-4 py-2 bg-white text-black rounded">
					Shop Now
				</button>
			</div>

			<div className="bg-white text-black w-1/3">
				<Image
					src="/images/xiaomi.png"
					alt="Xiaomi"
					width={500}
					height={500}
					className="mb-4"
				/>
				<h2 className="text-xl font-bold">Xiaomi</h2>
				<p>Up to 80% OFF</p>
			</div>

			<div className="bg-gray-200 text-black ">
				<Image
					src="/images/iphone.png"
					alt="iPhone"
					width={500}
					height={500}
					className="mb-4"
				/>
				<h2 className="text-xl font-bold">iPhone</h2>
				<p>Up to 80% OFF</p>
			</div>
		</div>
	);
};

export default Hero;
