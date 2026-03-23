import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-24 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-600 opacity-[0.02] blur-[100px]"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 border-b border-white/5 pb-10">
        {/* Left Section */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-xl shadow-lg ring-1 ring-white/20 group-hover:scale-105 transition-transform">
              V
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Vishal Tools
            </span>
          </Link>
          <p className="text-base leading-relaxed mb-8 font-light">
            Leading manufacturer of high-quality industrial machinery and tools.
            Serving global industries with precision-engineered solutions for over 25
            years from Vadodara.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-red-500 p-2 rounded-full"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-white font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/categories/pellet-hammer">Pellet & Hammer Mills</Link>
            </li>
            <li>
              <Link href="/categories/cnc-services">CNC Machining</Link>
            </li>
            <li>
              <Link href="/categories/shafts-gears">Industrial Shafts</Link>
            </li>
            <li>
              <Link href="/categories/dies-punches">Dies & Punches</Link>
            </li>
            <li>
              <Link href="/categories/hydraulics">Hydraulic Equipment</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/#Services_Section">Custom Manufacturing</Link>
            </li>
            <li>
              <Link href="/#Services_Section">Maintenance Services</Link>
            </li>
            <li>
              <Link href="/#Services_Section">Technical Support</Link>
            </li>
            <li>
              <Link href="/#Services_Section">Industrial Installation</Link>
            </li>
            <li>
              <Link href="/#Services_Section">Operator Training</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Careers</Link>
            </li>
            <li>
              <Link href="/">Latest News</Link>
            </li>
            <li>
              <Link href="/about">Quality Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact Support</Link>
            </li>
          </ul>
        </div>

        {/* Contact info column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Call Us</span>
              <a href="tel:+918735972509" className="text-white text-lg font-medium hover:text-orange-500 transition-colors tracking-wide">+91 87359 72509</a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">WhatsApp</span>
              <a href="https://wa.me/918735972509" target="_blank" rel="noopener noreferrer" className="text-green-500 text-lg font-medium hover:text-green-400 transition-colors flex items-center gap-2">
                Chat on WhatsApp &rarr;
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Location</span>
              <span className="text-gray-400 leading-relaxed">Makarpura, Vadodara, Gujarat - 390010</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Vishal Tools Enterprise. All rights
          reserved.
        </p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/about">Privacy Policy</Link>
          <Link href="/about">Terms of Service</Link>
          <Link href="/about">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
