"use client";
import React from "react";
import { categories } from "src/app/data/data";
import Link from "next/link";
const ProductCategories = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center py-4">
      <div>
        <h1 className="font-bold text-3xl my-2">Product Categories</h1>
        <p className="mb-4">
          Explore our comprehensive range of industrial equipment and machinery
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 px-4 min-w-screen items-center">
        {categories.map((cat, index) => (
          <div
            key={cat.id}
            className="w-full flex mb-3 justify-center items-center sm:w-1/2 md:w-1/3 md:mx-3 lg:w-1/5 "
          >
            <Card
              name={cat.name}
              desc={cat.description}
              image={cat.image}
              count={cat.products.length}
              id={cat.id}
            />
          </div>
        ))}
      </div>

      <div className="py-18">
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-5 rounded-md">
        <Link href="/categories">
        
          View All Products
        </Link>
        </button>
      </div>
    </div>
  );
};

const Card = ({ name, desc, image, count, id }) => {
  console.log(id)
  return (
    <div className="card card-sm bg-base-100 w-64 shadow-sm">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="line-clamp-3 text-sm">{desc}</p>
        <div className="card-actions flex justify-between items-center">
          <p className="text-orange-500 font-bold pt-3 pr-2">
            {count} Products
          </p>
            <Link href={`/categories/${id}`}>
          <button className="btn btn-primary">
            View
            
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
