"use client";
import React from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch with Vishal Tools Enterprise for premium industrial solutions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We are here to help you with your industrial requirements. Reach out to us via phone, email or visit our facility.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Our Location</h3>
                  <p className="text-gray-600">
                    Plot No. 101, Parvati Nagar, No. 2, <br />
                    Makarpura, B/h Makarpura S. T. Depot, <br />
                    Near Nilkanth Residency, Vadodara, Gujarat, 390010
                  </p>
                  <a 
                    href="https://www.google.com/maps/place/Vishal+Tools+Enterprise/@22.2568,73.1901,17z" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 font-medium text-sm mt-2 inline-flex items-center gap-1 hover:underline"
                  >
                    View on Google Maps <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Phone Number</h3>
                  <p className="text-gray-600 mb-1">+91 80460 45834</p>
                  <p className="text-sm text-gray-500">Mon-Sat, 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email Address</h3>
                  <p className="text-gray-600">info@vishaltoolsenterprise.com</p>
                  <p className="text-gray-600">sales@vishaltoolsenterprise.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map/Form Side */}
          <div className="bg-gray-50 rounded-2xl p-2 h-full min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.657662973166!2d73.1936!3d22.2533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6765f193bed2821%3A0xd6765f193bed2821!2sVishal+Tools+Enterprise!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1rem', minHeight: '400px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
