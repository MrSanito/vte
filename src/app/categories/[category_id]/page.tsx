"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { categories } from "src/app/data/data";
import ProductCard from "../components/ProductCard";

const CategoryDetailPage = () => {
  const params = useParams();
  const categoryId = params?.category_id;

  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
        {/* Sidebar (same design as CategoriesPage) */}
        <aside className="w-full md:w-64 bg-white shadow-md border-b md:border-r md:border-b-0 p-4 md:p-6">
          <h2 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-gray-800">
            📂 Categories
          </h2>
          <ul className="grid grid-cols-2 md:block gap-2 md:space-y-3">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/categories/${cat.id}`}
                  className="block p-2 rounded-md hover:bg-orange-100 hover:text-orange-600 text-gray-700 font-medium text-sm md:text-base transition"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Right side: fallback message */}
        <main className="flex-1 flex items-center justify-center text-center p-6">
          <h1 className="text-xl font-bold text-red-500">Category not found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar (same design as CategoriesPage) */}
      <aside className="w-full md:w-64 bg-white shadow-md border-b md:border-r md:border-b-0 p-4 md:p-6">
        <h2 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-gray-800">
          📂 Categories
        </h2>
        <ul className="grid grid-cols-2 md:block gap-2 md:space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/categories/${cat.id}`}
                className={`block p-2 rounded-md transition font-medium text-sm md:text-base ${
                  cat.id === categoryId
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                }`}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right side: products */}
      <main className="flex-1 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          {category.name}
        </h1>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          {category.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CategoryDetailPage;


