"use client"

import ProductCategories from "src/components/ProductCategories";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LeadForm = dynamic(() => import("src/components/LeadForm"), {
  ssr: false,
});

export default function Home() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="HeroSection"
        className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Hero.jpg" 
            alt="Factory Background" 
            fill
            priority
            className="object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/20 via-transparent to-gray-950"></div>
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter mb-8">
              Precision Engineering <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-sm">
                Redefined.
              </span>
            </h1>

            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-tight">
              Vishal Tools Enterprise delivers world-class industrial machinery and custom engineering solutions 
              with <span className="text-white font-medium">unmatched precision</span> and <span className="text-white font-medium">quality</span>.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
              <Link
                href="/categories"
                className="group relative inline-flex items-center justify-center rounded-full bg-orange-600 px-10 py-5 text-lg font-bold text-white shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:bg-orange-700 hover:-translate-y-1 transition-all overflow-hidden"
              >
                <span className="relative z-10">Explore Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-10 py-5 text-lg font-bold text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </section>

      <section
        id="Services_Section"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive industrial solutions tailored to meet your manufacturing needs with precision and efficiency.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/categories/cnc-services" className="group glass-card rounded-3xl p-10 shadow-xl hover:shadow-orange-500/10 transition-all border border-gray-200/50 dark:border-white/5 block h-full">
                <div className="w-20 h-20 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:glow-orange transition-all duration-500">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Industrial Machinery
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                  High-performance manufacturing equipment designed for maximum
                  efficiency and durability.
                </p>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:scale-150 transition-transform"></div> CNC Machines
                  </li>
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:scale-150 transition-transform"></div> Hammer Mills
                  </li>
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-orange-500 group-hover/item:scale-150 transition-transform"></div> Conveyor Systems
                  </li>
                </ul>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/categories/shafts-gears" className="group glass-card rounded-3xl p-10 shadow-xl hover:shadow-blue-500/10 transition-all border border-gray-200/50 dark:border-white/5 block h-full">
                <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Spare Parts & Components
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                  Genuine replacement parts and components to keep your machinery
                  running at peak performance.
                </p>
                 <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-blue-600 group-hover/item:scale-150 transition-transform"></div> OEM Parts
                  </li>
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-blue-600 group-hover/item:scale-150 transition-transform"></div> Bearings & Seals
                  </li>
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-blue-600 group-hover/item:scale-150 transition-transform"></div> Hydraulic Components
                  </li>
                </ul>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/contact" className="group glass-card rounded-3xl p-10 shadow-xl hover:shadow-green-500/10 transition-all border border-gray-200/50 dark:border-white/5 block h-full">
                <div className="w-20 h-20 rounded-2xl bg-green-500/10 flex items-center justify-center mb-8 group-hover:bg-green-600 transition-all duration-500">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                  Maintenance Services
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                  Comprehensive maintenance and repair services to ensure optimal
                  performance and longevity.
                </p>
                 <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-green-600 group-hover/item:scale-150 transition-transform"></div> Preventive Maintenance
                  </li>
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-green-600 group-hover/item:scale-150 transition-transform"></div> Emergency Repairs
                  </li>
                  <li className="flex items-center gap-4 group/item">
                     <div className="w-2 h-2 rounded-full bg-green-600 group-hover/item:scale-150 transition-transform"></div> Technical Support
                  </li>
                </ul>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600 opacity-10 blur-[120px] rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-600 opacity-5 blur-[120px] rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 grid-pattern opacity-5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-6">
                  Custom Engineering
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight tracking-tight">
                  Tailored Solutions for <br className="hidden md:block" /> Complex Industrial Needs
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                  Our specialized engineering team delivers bespoked machinery design and 
                  manufacturing to solve your most challenging operational requirements with clinical precision.
              </p>
              
              <button
                  className="group inline-flex items-center gap-3 bg-white text-gray-950 hover:bg-orange-600 hover:text-white font-bold py-5 px-12 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
                  onClick={() => setOpen(true)}
              >
                  Request Custom Quote 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
            
            {/* Full screen dialog */}
            <LeadForm open={open} onOpenChange={setOpen} />
        </div>
      </section>
      <ProductCategories />

      <section className="bg-white dark:bg-gray-950 py-32 px-6 md:px-12 lg:px-20 transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-500 opacity-5 blur-[100px] -translate-x-1/2"></div>
        
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
              25 Years of Engineering Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed font-light">
              Founded in 1998, Vishal Tools Enterprise has been at the forefront
              of industrial innovation. What started as a small precision machine shop 
              has evolved into a global leader in high-performance machinery.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed font-light">
              Our commitment to quality and customer satisfaction
              has made us a trusted partner for businesses ranging from SMEs
              to Fortune 500 companies. We blend traditional craftsmanship with 
              autonomous technology.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-10 mb-12">
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-sm">
                <h3 className="text-3xl md:text-4xl font-black text-orange-600 dark:text-orange-500 mb-1">500k+</h3>
                <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs font-bold">Units Built</p>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-white/5 shadow-sm">
                <h3 className="text-3xl md:text-4xl font-black text-orange-600 dark:text-orange-500 mb-1">50+</h3>
                <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest text-xs font-bold">Markets Served</p>
              </div>
            </div>

            {/* Button */}
            <button className="relative overflow-hidden group bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300">
              <span className="relative z-10 transition-colors group-hover:text-orange-500">Read Our Story</span>
              <div className="absolute inset-0 bg-white/10 dark:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 group">
              <Image
                src="/Hero.jpg" 
                alt="Vishal Tools Enterprise"
                width={800}
                height={600}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            {/* Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-8 rounded-3xl shadow-2xl font-bold tracking-tight"
            >
              <div className="text-sm opacity-80 mb-1 uppercase tracking-widest">Certified Tooling</div>
              <div className="text-2xl">ISO 9001:2015</div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
