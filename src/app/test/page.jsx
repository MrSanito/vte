"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";



const products = [
  {
    id: 1,
    name: "Lifelong PVC Hex Dumbbells",
    price: 259,
    img: "/images/slide1.jpg",
  },
  {
    id: 2,
    name: "Boldfit Hand Grip Strengthener",
    price: 149,
    img: "/images/slide2.jpg",
  },
  {
    id: 3,
    name: "Lifelong Kids Kick Scooter",
    price: 1279,
    img: "/images/slide3.jpg",
  },
  {
    id: 4,
    name: "Extra Product Example",
    price: 599,
    img: "/images/slide4.jpg",
  },
];

const ProductCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="  flex items-center justify-center p-5">
      {/* Left arrow */}
      <button
        ref={prevRef}
        className="  m-4 bg-gray-800 text-white p-3 rounded-full"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {/* Swiper slider */}
      <div className="w-1/2">
        <Swiper
          modules={[Navigation]}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border p-3 rounded shadow hover:shadow-lg transition">
                <img
                  src="/Hero.jpg"
                  alt={product.name}
                  className="w-full h-40 object-cover mb-2 rounded"
                />
                <h3 className="font-bold">{product.name}</h3>
                <p>₹{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right arrow */}
      <button
        ref={nextRef}
        className=" m-3 bg-gray-800 text-white p-3 rounded-full"
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ProductCarousel;
