import React from "react";

const Offer = () => {
	return (
		<div className="bg-[#DDE5F0] 0 p-4 rounded-lg w-64 h-[420px]">
			<h2 className="text-primaryColor font-semibold text-4xl px-5 pt-5">
				Opening Hot Offer
			</h2>
			<p className="text-gray-600 text-3xl px-5 pb-5 mt-2">End:</p>
			<div className="">
				<div className="flex justify-center items-center my-4">
					<div className="flex w-20 h-20 flex-row items-center justify-center bg-primaryColor text-white rounded-md p-2 mx-1">
						<span className="text-2xl font-bold">09</span>
					</div>
						<span className="text-2xl font-bold text-primaryColor">:</span>
					<div className="flex w-20 h-20 flex-row items-center justify-center bg-primaryColor text-white rounded-md p-2 mx-1">
						<span className="text-2xl font-bold">18</span>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<div className="flex w-20 h-20 flex-row items-center justify-center bg-primaryColor text-white rounded-md p-2 mx-1">
						<span className="text-2xl font-bold">28</span>
					</div>
						<span className="text-2xl font-bold text-primaryColor">:</span>
					<div className="flex w-20 h-20 flex-row items-center justify-center bg-primaryColor text-white rounded-md p-2 mx-1">
						<span className="text-2xl font-bold">18</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Offer;
