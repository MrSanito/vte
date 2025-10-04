"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Beanie",
    price: 18,
    oldPrice: 20,
    rating: 3,
    image: "/beanie.png",
  },
  {
    id: 2,
    name: "T-Shirt with Logo",
    price: 18,
    rating: 4,
    image: "/tshirt.png",
  },
  {
    id: 3,
    name: "Hoodie with Logo",
    price: 45,
    rating: 3,
    image: "/hoodie.png",
  },
  { id: 4, name: "Sneakers", price: 120, rating: 5, image: "/shoes.png" },
  { id: 5, name: "Backpack", price: 80, rating: 4, image: "/bag.png" },
  { id: 6, name: "Sunglasses", price: 60, rating: 4, image: "/sunglasses.png" },
];

export default function ProductCarousel() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? products.length - itemsPerPage : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= products.length - itemsPerPage ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-10">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl shadow-lg border">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / itemsPerPage)}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/3 flex-shrink-0 bg-white p-6 flex flex-col items-center text-center"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-32 object-contain mb-4"
              />

              {/* Product Name */}
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      product.rating >= star
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Price */}
              <div className="mb-4">
                {product.oldPrice && (
                  <span className="text-gray-400 line-through mr-2">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Add to Cart */}
              <button className="w-1/2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
Inquire              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white border p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white border p-2 rounded-full shadow hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: products.length - itemsPerPage + 1 }).map(
          (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-blue-500 scale-125" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
            />
          )
        )}
      </div>
    </div>
  );
}
