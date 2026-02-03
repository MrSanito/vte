"use client";

import React, { useRef } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const CategorySlider = ({ category, index }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl p-6 shadow-sm border ${
        index % 2 === 0
          ? "bg-white"
          : "bg-gradient-to-r from-orange-50 to-white"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs uppercase tracking-wide text-orange-500 font-semibold">
            Featured Category
          </p>
          <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
        </div>

        <Link
          href={`/categories/${category.id}`}
          className="text-sm font-semibold text-orange-600 hover:underline"
        >
          View all →
        </Link>
      </div>

      {/* Left Button */}
      <button
        ref={prevRef}
        className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/70 border border-gray-200 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1.2, centeredSlides: true },
          640: { slidesPerView: 2.2, centeredSlides: false },
          1024: { slidesPerView: 3 },
        }}
      >
        {category.products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Button */}
      <button
        ref={nextRef}
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/70 border border-gray-200 text-gray-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:scale-110 transition"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </motion.div>
  );
};

export default CategorySlider;
