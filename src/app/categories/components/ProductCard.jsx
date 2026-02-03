"use client";
import React, { useState } from "react";
import InquireModal from "src/components/InquireModal";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full">
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
            High-quality {product.name} designed for industrial precision and durability.
          </p>
          
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
             {product.price !== "₹---" ? product.price : "Ask for Price"} 
            </span>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium rounded-lg transition-colors shadow-md hover:shadow-lg active:scale-95"
            >
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      <InquireModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={product} 
      />
    </>
  );
};

export default ProductCard;
