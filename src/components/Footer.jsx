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
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 border-b border-white/5 pb-10">
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
              <Link href="#">Hammer Mills</Link>
            </li>
            <li>
              <Link href="#">CNC Machines</Link>
            </li>
            <li>
              <Link href="#">Conveyor Systems</Link>
            </li>
            <li>
              <Link href="#">Cutting Tools</Link>
            </li>
            <li>
              <Link href="#">Hydraulic Equipment</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">Custom Manufacturing</Link>
            </li>
            <li>
              <Link href="#">Maintenance Services</Link>
            </li>
            <li>
              <Link href="#">Technical Support</Link>
            </li>
            <li>
              <Link href="#">Installation</Link>
            </li>
            <li>
              <Link href="#">Training</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Quality</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
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
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
