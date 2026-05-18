import React from "react";
import { openWhatsApp } from "../data/products";

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ProductDetail = ({ product, setCurrentPage }) => {
  if (!product) return null;

  const { img, name, price, desc, category, tags = [] } = product;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <button
        onClick={() => setCurrentPage("products")}
        className="flex items-center gap-2 text-gray-500 hover:text-rose-500 text-sm mb-6 transition"
      >
        &larr; Back to Shop
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="rounded-3xl overflow-hidden h-96 bg-white shadow-sm">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <p className="text-xs text-rose-500 font-medium tracking-widest uppercase mb-2">
            {category}
          </p>

          <h1 className="font-serif text-4xl text-gray-900 leading-tight mb-3">
            {name}
          </h1>

          <p className="text-3xl font-medium text-rose-800 mb-4">
            Rs {price}
          </p>

          <p className="text-gray-500 text-base leading-relaxed mb-6">
            {desc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-rose-50 text-rose-700 text-xs px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() =>
                openWhatsApp(
                  `Hi! I'd like to order: ${name} (Rs ${price}). Please confirm availability and delivery details.`
                )
              }
              className="bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl text-base font-medium flex items-center justify-center gap-2 transition w-full"
            >
              <WaIcon /> Order on WhatsApp
            </button>

            <button
              onClick={() => setCurrentPage("contact")}
              className="border border-rose-200 text-rose-700 hover:bg-rose-50 py-3 rounded-xl text-sm font-medium transition w-full"
            >
              Ask a Question
            </button>
          </div>

          <p className="mt-4 text-xs text-gray-400 text-center">
            Same-day delivery for orders placed before 2pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;