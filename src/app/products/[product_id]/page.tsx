import React from "react";
import { categories } from "src/app/data/data";
import { ChevronRight, Phone, Mail, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { product_id } = await params;
  
  let product = null;
  let category = null;
  
  for (const cat of categories) {
    const found = cat.products.find(p => p.id === product_id);
    if (found) {
      product = found;
      category = cat;
      break;
    }
  }

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | Vishal Tools Enterprise`,
    description: product.description || `High-quality ${product.name} from Vishal Tools Enterprise. ${category.description}`,
    openGraph: {
      title: `${product.name} | Vishal Tools Enterprise`,
      description: product.description || `High-quality ${product.name} from Vishal Tools Enterprise.`,
      images: [{ url: product.image && product.image.startsWith('/') ? product.image : '/Hero.jpg' }],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { product_id } = await params;
  
  let product = null;
  let category = null;
  
  for (const cat of categories) {
    const found = cat.products.find(p => p.id === product_id);
    if (found) {
      product = found;
      category = cat;
      break;
    }
  }

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium">
          <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-500 transition">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/categories" className="hover:text-orange-600 dark:hover:text-orange-500 transition">Categories</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/categories/${category.id}`} className="hover:text-orange-600 dark:hover:text-orange-500 transition">{category.name}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-gray-200 truncate">{product.name}</span>
        </nav>

        <div className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-80 md:h-auto bg-gray-100 dark:bg-gray-800 p-8 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={product.image || "/Hero.jpg"}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                  {category.name}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic">
                  "{product.description || `Uncompromising industrial ${product.name.toLowerCase()} engineered for maximum precision, efficiency, and heavy-duty performance.`}"
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-col gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Price Status</span>
                    <span className="text-2xl font-black text-gray-950 dark:text-white">
                      {product.price !== "₹---" ? product.price : "Contact for Quote"}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg shadow-orange-600/20 active:scale-95"
                  >
                    Inquire Now
                  </Link>
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: product.name,
                          url: window.location.href
                        });
                      }
                    }}
                    className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all active:scale-95"
                  >
                    <Share2 className="w-5 h-5" /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More from this category */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
             <div className="w-2 h-8 bg-orange-600 rounded-full" />
             Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.filter(p => p.id !== product_id).slice(0, 3).map((item) => (
              <Link 
                key={item.id} 
                href={`/products/${item.id}`}
                className="group bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-orange-500 transition-all shadow-sm flex flex-col gap-4"
              >
                <div className="relative h-40 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors">{item.name}</h3>
                <span className="text-sm font-medium text-orange-600">View Details &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Schema.org for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product.name,
            "image": product.image && product.image.startsWith('/') ? `https://www.vishaltoolsententerprise.in${product.image}` : product.image || "https://www.vishaltoolsententerprise.in/Hero.jpg",
            "description": product.description || `High-quality ${product.name} from Vishal Tools Enterprise.`,
            "brand": {
              "@type": "Brand",
              "name": "Vishal Tools Enterprise"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://www.vishaltoolsententerprise.in/products/${product.id}`,
              "priceCurrency": "INR",
              "price": "0",
              "availability": "https://schema.org/InStock"
            }
          }),
        }}
      />
    </div>
  );
}
