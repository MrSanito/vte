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
        className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center overflow-hidden sm:pt-10"
      >
        {/* Blurred Background */}
        <div className="absolute inset-0 bg-[url('/Hero.jpg')] bg-cover bg-center filter blur-xs"></div>

        {/* Dark overlay for readability (optional) */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl ">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug pt-18 md:pt-12  ">
            Precision Engineering for{" "}
            <span className="text-orange-500">Industrial Excellence</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            Leading manufacturer of high-quality industrial machinery, tools,
            and equipment. <br className="hidden sm:block" />
            Serving industries worldwide with innovative solutions and unmatched
            reliability <br className="hidden sm:block" />
            for over 25 years.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/categories"
              className="inline-block rounded bg-orange-500 px-6 py-3    font-medium text-white shadow hover:bg-orange-600 transition-colors text-sm sm:text-base"
            >
              View Our Products
            </Link>
            <Link
              href="#"
              className="inline-block rounded border border-gray-300 bg-white/10 px-6 py-3 md:w-auto font-medium text-white shadow hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              Watch Factory Tour
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="rounded bg-white/10 px-6 py-6 text-white shadow">
              <p className="text-2xl sm:text-3xl font-bold">25+</p>
              <p className="text-sm sm:text-base text-gray-200">
                Years Experience
              </p>
            </div>
            <div className="rounded bg-white/10 px-6 py-6 text-white shadow">
              <p className="text-2xl sm:text-3xl font-bold">500+</p>
              <p className="text-sm sm:text-base text-gray-200">
                Global Clients
              </p>
            </div>
            <div className="rounded bg-white/10 px-6 py-6 text-white shadow">
              <p className="text-2xl sm:text-3xl font-bold">1000+</p>
              <p className="text-sm sm:text-base text-gray-200">
                Products Delivered
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Services_Section"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Core Services
          </h2>
          <p className="mt-2 text-gray-600 text-base sm:text-lg">
            Comprehensive industrial solutions tailored to meet your
            manufacturing needs
          </p>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-orange-100 text-orange-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Industrial Machinery
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                High-performance manufacturing equipment designed for maximum
                efficiency and durability in industrial environments.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> CNC Machines
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Hammer Mills
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Conveyor Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Packaging Equipment
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6l4 2"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Spare Parts & Components
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Genuine replacement parts and components to keep your machinery
                running at peak performance.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> OEM Parts
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Bearings & Seals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Cutting Tools
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-500">✔</span> Hydraulic Components
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-green-100 text-green-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Maintenance Services
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                Comprehensive maintenance and repair services to ensure optimal
                performance and longevity.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> Preventive
                  Maintenance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> Emergency Repairs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> Equipment Upgrades
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> Technical Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className=" border text-center min-h-56 py-6 bg-black/80 text-white flex flex-col gap-3 justify-center items-center">
          {" "}
          <h3 className="font-bold text-2xl">Custom Manufacturing Solutions</h3>
          <p>
            Need something specific? Our engineering team specializes in custom
            machinery design and <br className="hidden md:block" />
            manufacturing to meet your unique requirements.
          </p>
          <button
            className="px-6 bg-orange-500 max-w-3xl py-2 text-lg font-medium rounded-sm"
            onClick={() => setOpen(true)}
          >
            Request Custom Quote{" "}
          </button>
          {/* Full screen dialog */}
          <LeadForm open={open} onOpenChange={setOpen} />
        </div>
      </section>
      <ProductCategories />

      <section className="bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              About IndusTech Manufacturing
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, IndusTech Manufacturing has been at the forefront
              of industrial innovation for over 25 years. What started as a
              small machine shop has evolved into a leading manufacturer of
              precision industrial equipment, serving clients across the globe.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction
              has made us a trusted partner for businesses ranging from small
              manufacturers to Fortune 500 companies. We combine traditional
              craftsmanship with cutting-edge technology to deliver solutions
              that exceed expectations.
            </p>

            {/* Stats */}
            <div className="flex gap-12 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-orange-600">500,000+</h3>
                <p className="text-gray-600">Units Manufactured</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-orange-600">50+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>

            {/* Button */}
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Our Story
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="Hero.jpg" // replace with your image
              alt="IndusTech Manufacturing"
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
