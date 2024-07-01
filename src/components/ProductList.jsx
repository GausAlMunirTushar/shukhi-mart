import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ title, productInfo }) => {
  let products = productInfo;

  return (
    <div className="my-10">
      <div>
        <div className="flex items-center justify-between mx-2 sm:mx-0">
          <h1 className="text-3xl font-semibold text-primaryColor my-1">
            {title}
          </h1>
          <a href="#" className="text-primaryColor">
            View All
          </a>
        </div>
        <hr className="my-1 border-none h-1 bg-primaryColor mx-2 sm:mx-0" />
      </div>
      <div className="flex flex-wrap justify-around py-4 mx-auto">
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

export default ProductList;
