"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../../@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-16 w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Brand */}
        <Link href="/" className="text-xl font-bold text-primary">
          Vishal Industries
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>

          <Link href="/categories" className="text-gray-700 hover:text-primary">
            Products
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary">
            Contact
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary">
            About
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* 🔹 Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)} // 👈 close on click
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-primary">Menu</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col gap-6 text-lg">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Link href="/products" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
