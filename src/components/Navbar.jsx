"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "../../@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Handle scroll effect with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we should show the "solid/scrolled" style
  const showSolid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        showSolid
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg border-gray-200/50 dark:border-gray-800/50 h-16"
          : "bg-transparent border-transparent h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-xl shadow-lg ring-1 ring-white/20 group-hover:scale-105 transition-transform">
            V
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${showSolid ? 'text-gray-900 dark:text-white' : 'text-white drop-shadow-md'}`}>
            Vishal Tools Enterprise
          </span>
        </Link>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Home", href: "/" },
            { name: "Products", href: "/categories" },
            { name: "Services", href: "/#Services_Section" }, // Added anchor link
            { name: "About", href: "/about" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                showSolid 
                  ? "text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500" 
                  : "text-white/90 hover:text-white drop-shadow-sm"
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <Link href="/contact">
            <Button 
                variant={showSolid ? "default" : "secondary"}
                className={`rounded-full px-6 font-semibold shadow-md transition-all hover:scale-105 ${
                    !showSolid && "bg-white text-orange-600 hover:bg-gray-100"
                }`}
            >
                Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className={showSolid ? "text-gray-900 dark:text-white" : "text-white"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[75%] max-w-sm h-full bg-white dark:bg-gray-950 shadow-2xl z-50 flex flex-col p-6 border-l border-gray-100 dark:border-gray-800"
            >
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="flex flex-col gap-2">
                {[
                    { name: "Home", href: "/" },
                    { name: "Products", href: "/categories" },
                    { name: "Services", href: "/#Services_Section" },
                    { name: "About", href: "/about" },
                    { name: "Contact", href: "/contact" },
                ].map((item, idx) => (
                    <Link 
                        key={idx}
                        href={item.href} 
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-900 group transition-colors"
                    >
                        <span className="text-lg font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-500">
                            {item.name}
                        </span>
                        <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full rounded-xl py-6 text-lg bg-gradient-to-r from-orange-600 to-red-600 shadow-lg shadow-orange-500/20">
                        Get a Quote Now
                    </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
