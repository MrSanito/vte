"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle, Users, Award, Globe, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pioneering Industrial Excellence</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Vishal Tools Enterprise is a leading name in precision manufacturing, delivering world-class industrial solutions from the heart of Vadodara, Gujarat.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h4 className="text-orange-600 font-bold uppercase tracking-wide mb-2">About Us</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Engineering Quality Since Inception
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located in the industrial hub of Makarpura, Vadodara, Vishal Tools Enterprise specializes in high-precision engineering components. We cater to diverse sectors including automotive, aerospace, heavy machinery, and general engineering.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our state-of-the-art facility is equipped with advanaced CNC machinery, grinding units, and inspection labs, enabling us to maintain strict quality standards and meet tight deadlines.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-white bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <img 
              src="/Hero.jpg" 
              alt="Factory Floor" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <p className="text-4xl font-bold text-orange-600">25+</p>
              <p className="text-gray-600 font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We are driven by a commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Precision Quality</h3>
              <p className="text-gray-600">
                Rigorous quality control processes ensure every component meets exact specifications and international standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of skilled engineers and technicians brings decades of combined experience to every project.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Trusted by clients across India and around the globe for timely delivery and reliable supply chain management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications (Visual placeholder) */}
      <section className="py-20 px-6 border-t border-gray-100">
         <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Committed to Excellence</h2>
            <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all">
                {/* Placeholders for logos - in a real app these would be actual client/cert logos */}
                <div className="flex items-center gap-2 border px-6 py-3 rounded-lg">
                    <Award className="w-6 h-6 text-orange-500" />
                    <span className="font-bold text-gray-800">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 border px-6 py-3 rounded-lg">
                    <Award className="w-6 h-6 text-blue-500" />
                    <span className="font-bold text-gray-800">Make In India</span>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutPage;
