"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { categories } from "src/app/data/data";
import ProductCard from "../components/ProductCard";
import { ChevronRight, ArrowLeft } from "lucide-react";

const CategoryDetailPage = () => {
  const params = useParams();
  const categoryId = params?.category_id;

  const category = categories.find((c) => c.id === categoryId);

  // Fallback for not found
  if (!category) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 text-center px-4 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Category Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">We couldn't find the category you're looking for.</p>
        <Link 
          href="/categories"
          className="bg-orange-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-700 transition"
        >
          Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Category Hero / Header */}
      <div className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
              <Link href="/categories" className="hover:text-orange-600 dark:hover:text-orange-500 transition">
                Categories
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 dark:text-gray-200">{category.name}</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {category.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-3xl">
                        {category.description}
                    </p>
                </div>
                 {/* Mobile 'Back' block or extra info could go here if needed, 
                     but for now keeping it clean */}
            </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-5 sticky top-24">
            <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                All Categories
            </h2>
            <nav className="space-y-1">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    cat.id === categoryId
                      ? "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-l-4 border-orange-500"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <Link href="/contact" className="block p-4 bg-gray-900 dark:bg-gray-800 rounded-lg text-white text-center hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors">
                    <p className="text-sm font-medium opacity-80 mb-1">Need something custom?</p>
                    <span className="font-bold">Contact Us &rarr;</span>
                </Link>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {category.products.length} Products Available
                </h2>
                {/* Could add sorting/filtering here later */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>

      </div>
    </div>
  );
};

export default CategoryDetailPage;
