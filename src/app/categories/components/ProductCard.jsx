"use client";
import React, { useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const InquireModal = dynamic(() => import("src/components/InquireModal"), {
  ssr: false,
});

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="group glass-card rounded-3xl shadow-lg hover:shadow-orange-500/10 transition-all duration-500 border border-gray-200/50 dark:border-white/5 overflow-hidden flex flex-col h-full hover:-translate-y-2"
      >
        <Link 
          href={`/products/${product.id}`}
          className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 cursor-pointer block"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </Link>

        <div className="p-8 flex-1 flex flex-col">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3 tracking-tight group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors">
              {product.name}
            </h3>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 text-base mb-4 line-clamp-2 flex-1 font-light leading-relaxed">
            {product.description || `Uncompromising industrial ${product.name.toLowerCase()} engineered for maximum precision, efficiency, and heavy-duty performance.`}
          </p>
          <Link 
            href={`/products/${product.id}`}
            className="text-orange-600 dark:text-orange-500 text-sm font-bold hover:underline mb-6 inline-block"
          >
            View Details &rarr;
          </Link>
          
          <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-1">Price Point</span>
              <span className="text-lg font-extrabold text-gray-950 dark:text-white">
               {product.price !== "₹---" ? product.price : "Custom Quote"} 
              </span>
            </div>
            <button 
              onClick={() => {
                const whatsappUrl = `https://wa.me/918735972509?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please provide more details.`)}`;
                window.open(whatsappUrl, "_blank");
                setIsModalOpen(true);
              }}
              className="px-6 py-3 bg-gray-950 dark:bg-white text-white dark:text-gray-950 group-hover:bg-green-600 group-hover:text-white text-sm font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-green-500/20 active:scale-95 flex items-center gap-2"
            >
              Inquire
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

export default memo(ProductCard);
