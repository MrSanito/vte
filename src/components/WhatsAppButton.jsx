"use client";
import React from "react";
import { MessageCircle, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const WhatsAppButton = () => {
  const { theme, toggleTheme } = useTheme();
  const phoneNumber = "918735972509";
  const message = "Hi, I visited your website and have an inquiry.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {theme === "light" ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </button>

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 active:scale-90 transition-all duration-300 animate-bounce-slow group relative"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
             <path d="M16 2C8.269 2 2 8.269 2 16c0 2.505.659 4.853 1.808 6.9L2.25 28.5l5.808-1.508C10.021 28.025 12.016 29 16 29c7.731 0 14-6.269 14-14S23.731 2 16 2zm0 25c-3.58 0-5.325-1.025-7.796-2.07l-2.612.678.7-2.548C5.215 20.73 4 18.59 4 16c0-6.617 5.383-12 12-12s12 5.383 12 12-5.383 12-12 12zm6.673-8.834c-.368-.184-2.176-1.074-2.513-1.197-.336-.123-.582-.184-.827.184-.246.368-.95 1.197-1.166 1.442-.215.246-.43.276-.798.092-1.894-.949-3.134-1.666-4.372-3.801-.153-.264-.016-.406.168-.589.16-.16.368-.429.552-.644.184-.215.246-.368.368-.614.123-.245.061-.46-.03-.583-.092-.123-.827-1.995-1.134-2.731-.298-.718-.604-.621-.827-.632-.213-.011-.46-.011-.705-.011-.245 0-.644.092-.981.46-.337.368-1.288 1.258-1.288 3.068 0 1.81 1.319 3.559 1.503 3.804.184.246 2.592 3.959 6.278 5.548 2.531 1.091 3.047.876 3.599.821.876-.088 2.176-.89 2.482-1.748.307-.859.307-1.595.215-1.748-.092-.153-.337-.246-.705-.43z"></path>
        </svg>
        
        {/* Tooltip / Label */}
        <span className="absolute left-16 bg-white text-gray-800 px-3 py-1 rounded-md text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
