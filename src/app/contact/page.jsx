"use client";

import React from "react";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    console.log(form);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Page Title */}
      <h1 className="text-4xl font-bold tracking-wide mb-10">CONTACT</h1>

      {/* Form Container */}
      <div className="w-full max-w-2xl text-left">
        <h2 className="text-xl font-semibold mb-2">SEND US A MESSAGE</h2>
        <p className="text-sm text-gray-600 mb-8">*Denotes Mandatory Fields</p>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
              placeholder="Enter your name"
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
              placeholder="Enter your email"
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-400 focus:outline-none focus:border-black p-3"
              placeholder="Type message here..."
              onChange={(e) => {
                handleChange(e);
              }}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white font-semibold px-8 py-3 mt-4 hover:bg-gray-800 transition rounded-md"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
