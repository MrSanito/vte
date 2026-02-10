"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSolid = scrolled || !isHome;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-lg border-gray-200/50 dark:border-gray-800/50 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-xl shadow-lg ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              V
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
              Vishal Tools Enterprise
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/categories" },
              { name: "Services", href: "/#Services_Section" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                {item.name}
              </Link>
            ))}

            <Link href="/contact">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-full px-6 py-2 font-semibold shadow-md shadow-orange-500/20 transition-all hover:scale-105">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle text-gray-900 dark:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 z-[9998]"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[280px] h-full z-[9999] flex flex-col p-6 shadow-[10px_0_50px_rgba(0,0,0,0.6)] border-r border-white/10"
              style={{ backgroundColor: "#020617" }}
            >
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
                <span className="text-xl font-bold text-white uppercase tracking-widest">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-white/5 text-white hover:bg-white/10 active:scale-95 transition-all"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
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
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-white/10 group transition-all"
                  >
                    <span className="text-lg font-medium text-orange-50 group-hover:text-white">
                      {item.name}
                    </span>
                    <span className="text-orange-400 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto pb-8">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full rounded-xl py-4 text-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-black shadow-[0_10px_30px_rgba(234,88,12,0.3)] hover:from-orange-500 hover:to-red-500 active:scale-[0.98] transition-all uppercase tracking-tight">
                    Get Free Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
