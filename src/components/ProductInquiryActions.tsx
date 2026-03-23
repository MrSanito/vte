"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import ShareButton from "./ShareButton";

const InquireModal = dynamic(() => import("./InquireModal"), {
  ssr: false,
});

export default function ProductInquiryActions({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInquire = () => {
    const whatsappUrl = `https://wa.me/918735972509?text=${encodeURIComponent(`Hi, I'm interested in ${product.name}. Please provide more details.`)}`;
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="mb-12 bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-8">
        <div>
          <span className="block text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-2">Estimated Price</span>
          <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
            {product.price !== "₹---" ? product.price : "Contact for Pricing"}
          </span>
          <p className="text-xs text-orange-600 mt-2 font-medium italic">* Production cost depends on custom size and material specifications</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-1 sm:flex-none">
          <button 
            onClick={handleInquire}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-extrabold text-xl transition-all shadow-xl shadow-green-600/20 active:scale-95 flex-1"
          >
            Inquire on WhatsApp
          </button>
          <ShareButton productName={product.name} />
        </div>
      </div>

      <InquireModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={product} 
      />
    </>
  );
}
