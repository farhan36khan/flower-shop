import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded-3xl shadow-sm border border-rose-100 cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-52 object-cover rounded-2xl mb-4"
      />

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-4">{product.desc}</p>
      <p className="text-rose-600 font-semibold">Rs {product.price}</p>
    </div>
  );
};

export default ProductCard;