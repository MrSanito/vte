"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { categories } from "../data/data";
import ProductCard from "./components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CategoriesPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Left side: category list */}
      <aside className="w-full lg:w-64 bg-white shadow-md border-b lg:border-r lg:border-b-0 p-4 lg:p-6">
        <h2 className="font-bold text-lg lg:text-xl mb-3 lg:mb-4 text-gray-800">
          📂 Categories
        </h2>
        <ul className="grid grid-cols-2 lg:block gap-2 lg:space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/categories/${cat.id}`}
                className="block p-2 rounded-md hover:bg-orange-100 hover:text-orange-600 text-gray-700 font-medium text-sm lg:text-base transition"
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right side: horizontal carousels */}
      <div className="space-y-6 sm:space-y-8 p-3 sm:p-4 md:p-6 flex-1">
        {categories.map((category) => {
          const prevRef = useRef(null);
          const nextRef = useRef(null);

          return (
            <div
              key={category.id}
              className="border border-gray-300 rounded-lg p-3 sm:p-4 md:p-6 shadow-sm relative flex flex-col items-center justify-center mx-2 sm:mx-0"
            >
              <div className="text-start w-full flex justify-between">
                <div>
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 w-full text-start">
                  {category.name}
                  
                </h2>
                </div>
                <div>
                 </div>
              </div>

              {/* Left arrow */}
              <button
                ref={prevRef}
                className="absolute left-2 sm:left-[-15px] md:left-[-30px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 transition shadow-lg"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-sm sm:text-base"
                />
              </button>

              {/* Slider box */}
              <div className="w-full max-w-4xl overflow-hidden px-2 sm:px-0">
                <Swiper
                  direction="horizontal"
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
                  spaceBetween={16}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  loop={true}
                  centeredSlides={false}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.2,
                      spaceBetween: 12,
                      centeredSlides: true,
                    },
                    480: {
                      slidesPerView: 1.5,
                      spaceBetween: 14,
                      centeredSlides: true,
                    },
                    640: {
                      slidesPerView: 2.2,
                      spaceBetween: 16,
                      centeredSlides: false,
                    },
                    768: {
                      slidesPerView: 2.5,
                      spaceBetween: 18,
                      centeredSlides: false,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                      centeredSlides: false,
                    },
                    1280: {
                      slidesPerView: 3,
                      spaceBetween: 24,
                      centeredSlides: false,
                    },
                  }}
                >
                  {category.products.map((product) => (
                    <SwiperSlide key={product.id}>
                      <ProductCard product={product} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right arrow */}
              <button
                ref={nextRef}
                className="absolute right-2 sm:right-[-15px] md:right-[-30px] top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-700 transition shadow-lg"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-sm sm:text-base"
                />
              </button>
              <div className=" ">
                <Link href="/azul">
                  <button className="px-4 py-2 bg-orange-500 rounded-sm">See More...</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default CategoriesPage;
