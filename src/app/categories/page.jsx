"use client";

import React from "react";
import Link from "next/link";
import { categories } from "../data/data";
import { ArrowRight, PackageOpen } from "lucide-react";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Header Section */}
      <section className="bg-gray-900 dark:bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Our Product Range
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our comprehensive catalog of high-precision industrial machinery, 
             components, and engineering solutions.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link 
              href={`/categories/${cat.id}`} 
              key={cat.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 overflow-hidden flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Overlay Text (optional badge or count) */}
                <div className="absolute bottom-3 left-3 text-white">
                  <span className="bg-orange-600/90 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider backdrop-blur-sm">
                    {cat.products.length} Products
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-1">
                  {cat.description}
                </p>
                
                <div className="mt-auto flex items-center text-orange-600 dark:text-orange-500 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Browse Category <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
