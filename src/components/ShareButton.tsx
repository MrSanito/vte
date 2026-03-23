"use client";

import React from "react";
import { Share2 } from "lucide-react";

export default function ShareButton({ productName }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: productName,
        url: window.location.href,
      }).catch((err) => {
        console.error("Error sharing:", err);
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95 w-full sm:w-auto"
    >
      <Share2 className="w-5 h-5" /> Share
    </button>
  );
}
