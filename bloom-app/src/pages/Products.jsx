import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

const Products = ({ setCurrentPage, setDetailProduct }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleProductClick = (product) => {
    setDetailProduct(product);
    setCurrentPage('detail');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <p className="text-xs text-rose-500 font-medium tracking-widest uppercase mb-2">Our Shop</p>
      <h2 className="font-serif text-3xl text-gray-900 mb-8">All Arrangements</h2>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-5xl mb-4">🌱</div>
          <p>No products in this category yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => handleProductClick(p)} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
