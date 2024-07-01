import React from "react";
import ProductCard from "./ProductCard";
import Offer from "./Offer";

const OfferList = ({ productInfo }) => {
	let products = productInfo;
	return (
		<div className="flex flex-wrap my-10 mx-12 sm:mx-6">
			<div className="flex items-center mx-2 sm:mx-0">
				<Offer />
			</div>
			<div className="flex flex-wrap justify-between py-4 mx-4">
				{products.map((product, index) => (
					<div
						key={index}
						className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
					>
						<ProductCard
							stock=""
							productTitle={product.title}
							image={product.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default OfferList;
