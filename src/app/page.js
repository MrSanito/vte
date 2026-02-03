"use client"

import ProductCategories from "src/components/ProductCategories";
import Footer from "src/components/Footer";
import Link from "next/link";
import { useState } from "react";
import LeadForm from "src/components/LeadForm";

export default function Home() {
    const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="HeroSection"
        className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/Hero.jpg" 
            alt="Factory Background" 
            className="w-full h-full object-cover filter brightness-[0.4]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-6">
            Precision Engineering <br className="hidden md:block" />
            <span className="text-orange-500">Redefined.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Vishal Tools Enterprise delivers world-class industrial machinery and custom engineering solutions 
            from the heart of Vadodara to the world.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 hover:-translate-y-1 transition-all"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                 </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Industrial Machinery
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                High-performance manufacturing equipment designed for maximum
                efficiency and durability.
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> CNC Machines
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Hammer Mills
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Conveyor Systems
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Spare Parts & Components
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Genuine replacement parts and components to keep your machinery
                running at peak performance.
              </p>
               <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> OEM Parts
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Bearings & Seals
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> Hydraulic Components
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
              <div className="w-16 h-16 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Maintenance Services
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Comprehensive maintenance and repair services to ensure optimal
                performance and longevity.
              </p>
               <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Preventive Maintenance
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Emergency Repairs
                </li>
                <li className="flex items-center gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Technical Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-600 opacity-10 blur-3xl rounded-full transform translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4">
                Custom Engineering
            </h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
                Custom Manufacturing Solutions
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                Need something specific? Our specialized engineering team provides tailored machinery design and 
                manufacturing to meet your unique industrial requirements with precision.
            </p>
            
            <button
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-orange-900/50 transform transition hover:-translate-y-1 text-lg"
                onClick={() => setOpen(true)}
            >
                Request Custom Quote 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            
            {/* Full screen dialog */}
            <LeadForm open={open} onOpenChange={setOpen} />
        </div>
      </section>
      <ProductCategories />

      <section className="bg-white dark:bg-gray-950 py-12 px-6 md:px-12 lg:px-20 transition-colors duration-300">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              About Vishal Tools Enterprise
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded in 1998, Vishal Tools Enterprise has been at the forefront
              of industrial innovation for over 25 years. What started as a
              small machine shop has evolved into a leading manufacturer of
              precision industrial equipment, serving clients across the globe.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction
              has made us a trusted partner for businesses ranging from small
              manufacturers to Fortune 500 companies. We combine traditional
              craftsmanship with cutting-edge technology to deliver solutions
              that exceed expectations.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-500">500,000+</h3>
                <p className="text-gray-600 dark:text-gray-400">Units Manufactured</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-500">50+</h3>
                <p className="text-gray-600 dark:text-gray-400">Countries Served</p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-gray-900 dark:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-700 transition">
              Our Story
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="Hero.jpg" // replace with your image
              alt="Vishal Tools Enterprise"
              className="rounded-lg shadow-md w-full"
            />
            {/* Badge */}
            <div className="absolute bottom-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded">
              ISO 9001 <br /> Certified Quality
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
