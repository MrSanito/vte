"use client";
import React from "react";
import { categories } from "src/app/data/data";
import Link from "next/link";
const ProductCategories = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center py-4">
      <div>
        <h1 className="font-bold text-3xl my-2">Product Categories</h1>
        <p className="mb-4">
          Explore our comprehensive range of industrial equipment and machinery
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 px-4 min-w-screen items-center">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="w-full flex mb-3 justify-center items-center sm:w-1/2 md:w-1/3 md:mx-3 lg:w-1/5 "
          >
            <Card
              name={cat.name}
              desc={cat.description}
              image={cat.image}
              count={cat.products.length}
              id={cat.id}
            />
          </div>
        ))}
      </div>

      <div className="py-18">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-5 rounded-md">
        <Link href="/categories">
        
          View All Products
        </Link>
        </button>
      </div>
    </div>
  );
};

const Card = ({ name, desc, image, count, id }) => {
  console.log(id)
  return (
    <Link href={`/categories/${id}`} className="group relative block w-full max-w-sm h-full perspective-1000">
      <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)] border border-gray-100 dark:border-gray-800 ring-1 ring-black/5 dark:ring-white/10">
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
           <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Overlay Badge */}
            <div className="absolute top-3 right-3 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-600 shadow-sm border border-orange-100 dark:border-orange-900/30">
               {count} Products
            </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
            {name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6">
            {desc}
          </p>
          
          <div className="flex items-center justify-between mt-auto">
             <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-orange-500 transition-colors">
                View Collection
             </span>
             <div className="w-8 h-8 rounded-full bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
             </div>
          </div>
        </div>
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Link>
  );
};

export default ProductCategories;
