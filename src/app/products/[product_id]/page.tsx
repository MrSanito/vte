import React from "react";
import { categories } from "src/app/data/data";
import { ChevronRight, Phone, Mail, CheckCircle2, Factory, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareButton from "src/components/ShareButton";

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
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb - Clean & Minimal */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-10 font-medium">
          <Link href="/" className="hover:text-orange-600 transition">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/categories" className="hover:text-orange-600 transition">Products</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href={`/categories/${category.id}`} className="hover:text-orange-600 transition truncate">{category.name}</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 dark:text-gray-100 truncate font-bold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Column: Image & Highlights (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28">
              <div className="relative aspect-square bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-inner group">
                <Image
                  src={product.image || "/Hero.jpg"}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-900/30">
                  <ShieldCheck className="w-6 h-6 text-orange-600 mb-2" />
                  <span className="text-[10px] uppercase font-bold text-gray-600 dark:text-gray-400">Quality Assured</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-900/30">
                  <Factory className="w-6 h-6 text-orange-600 mb-2" />
                  <span className="text-[10px] uppercase font-bold text-gray-600 dark:text-gray-400">Direct Factory</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-900/30">
                  <Zap className="w-6 h-6 text-orange-600 mb-2" />
                  <span className="text-[10px] uppercase font-bold text-gray-600 dark:text-gray-400">Global Supply</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column: Product Info (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <span className="inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                {category.name}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Available for Quote
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                <span>ID: {product.id}</span>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-orange-500 pl-6 py-2">
                "{product.description || `Uncompromising industrial ${product.name.toLowerCase()} engineered for maximum precision and performance.`}"
              </p>
            </div>

            {/* Price section - CTA Focus */}
            <div className="mb-12 bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-8">
              <div>
                <span className="block text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-2">Estimated Price</span>
                <span className="text-4xl font-black text-gray-900 dark:text-white">
                  {product.price !== "₹---" ? product.price : "Contact for Pricing"}
                </span>
                <p className="text-xs text-orange-600 mt-2 font-medium">* Prices depend on customization and quantity</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-1 sm:flex-none">
                <Link 
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-orange-600/20 active:scale-95"
                >
                  Inquire Now
                </Link>
                <ShareButton productName={product.name} />
              </div>
            </div>

            {/* Product Details - Detailed Description */}
            {product.detailedDescription && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-600 rounded-full" />
                  Product Overview
                </h2>
                <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.detailedDescription}
                </div>
              </section>
            )}

            {/* Specifications - Amazon Style Table */}
            {product.specifications && (
              <section className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-600 rounded-full" />
                  Technical Specifications
                </h2>
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden">
                  <table className="w-full text-left">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], idx) => (
                        <tr key={key} className={idx % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-900/30' : 'bg-white dark:bg-gray-950'}>
                          <th className="px-6 py-5 text-sm font-bold text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 w-1/3">
                            {key}
                          </th>
                          <td className="px-6 py-5 text-sm font-black text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800">
                            {value as string}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Features & Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {product.features && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-orange-600 rounded-full" />
                    Key Features
                  </h2>
                  <ul className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-600 dark:text-gray-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {product.applications && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-2 h-8 bg-orange-600 rounded-full" />
                    Applications
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {product.applications.map((app, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-bold rounded-xl border border-gray-200 dark:border-gray-700">
                        {app}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-20 pt-20 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">Related in {category.name}</h2>
            <Link href={`/categories/${category.id}`} className="text-orange-600 font-bold hover:underline">
              View All Products &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.products.filter(p => p.id !== product_id).slice(0, 4).map((item) => (
              <Link 
                key={item.id} 
                href={`/products/${item.id}`}
                className="group bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 hover:border-orange-500 transition-all shadow-sm hover:shadow-xl flex flex-col gap-6"
              >
                <div className="relative aspect-square bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                  <span className="text-xs font-black text-orange-600 uppercase tracking-widest">Explore Details</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

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
