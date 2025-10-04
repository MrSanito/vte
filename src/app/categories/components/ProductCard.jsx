import React from "react";

const ProductCard = (params) => {
  console.log(params.product.description);

  return (
    <div className="w-full h-full">
      <div className="card bg-white shadow-sm rounded-lg overflow-hidden h-full flex flex-col w-full">
        <figure className="relative h-48 sm:h-56 md:h-48 lg:h-56">
          <img
            src="/Hero.jpg"
            alt={params.product.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-3 sm:p-4 flex flex-col flex-1">
          <h4 className="card-title text-sm sm:text-base lg:text-lg font-semibold line-clamp-2 mb-2">
            {params.product.name}
          </h4>
          <p className="line-clamp-2 text-xs sm:text-sm text-gray-600 flex-1 mb-3">
            {params.product.description}
          </p>
          <div className="card-actions flex justify-between items-center mt-auto">
            <p className="text-orange-500 font-bold text-sm sm:text-base">
              {params.product.price}
            </p>
            <button className="btn btn-primary btn-sm sm:btn-md text-xs sm:text-sm px-2 sm:px-4">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
