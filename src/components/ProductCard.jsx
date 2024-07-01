// components/ProductCard.js
import React from "react";
import Image from "next/image";

const ProductCard = ({stock, productTitle, image}) => {
	return (
		<div className="max-w-xs rounded-lg bg-white h-[420px] w-[220px] m-2">
			<div className="relative flex justify-center items-center h-[250px] bg-[#DDE5F0] rounded-lg">
				<Image
					src={image}
					alt="BOSS Stone 350 10 W Bluetooth Speaker"
					width={150}
					height={128}
					className="flex justify-center items-center"
				/>
				<span className="absolute top-2 right-2 bg-primaryColor text-white text-xs font-semibold px-2 py-1 rounded-lg">
					-20%
				</span>
			</div>
			<div className="p-2">
				<p className="text-sm text-primaryColor">Stock: 30</p>
				<h3 className="text-md font-semibold">
					{productTitle}
				</h3>
				<div className="mt-2">
					<span className="text-lg font-semibold text-primaryColor">
						৳ 1500
					</span>
					<span className="text-sm text-gray-500 line-through ml-2">
						৳ 2000
					</span>
				</div>
				<div className="flex items-center justify-between">
					<button className="mt-4 w-full bg-primaryColor text-white py-2 px-6 rounded-lg flex items-center justify-center">
						Add to Cart
					</button>
					
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
