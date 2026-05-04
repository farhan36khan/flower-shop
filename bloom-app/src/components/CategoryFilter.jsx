import React from 'react';
import { categories } from '../data/products';

const CategoryFilter = ({ active, onChange }) => (
  <div className="flex flex-wrap gap-2 mb-8">
    {categories.map((cat) => (
      <button
        key={cat.key}
        onClick={() => onChange(cat.key)}
        className={`px-4 py-2 rounded-full text-sm border transition ${
          active === cat.key
            ? 'bg-rose-50 border-rose-400 text-rose-600'
            : 'bg-white border-rose-100 text-gray-500 hover:border-rose-300 hover:text-rose-500'
        }`}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
