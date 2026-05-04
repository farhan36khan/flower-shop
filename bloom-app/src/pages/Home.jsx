import React, { useState } from 'react';
import { products, openWhatsApp } from '../data/products';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

const WaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const heroImages = [
  { src: '/images/rose.jpg' },
  { src: '/images/mixrose.jpg', alt: 'Mixed bouquet' },
  { src: '/images/pink.jpg', alt: 'Pink flowers' },
  { src: '/images/sunflower.jpg', alt: 'Sunflowers' },
];

const features = [
  { title: 'Farm Fresh', text: 'Sourced directly from local farms every morning for maximum freshness.' },
  { title: 'Same Day Delivery', text: 'Order by 2pm and receive your flowers the same day, guaranteed.' },
  { title: 'WhatsApp Ordering', text: 'Chat directly with us to customize any arrangement to perfection.' },
  { title: 'Free Gift Wrapping', text: 'Every order comes beautifully wrapped with a handwritten card.' },
];

const Home = ({ setCurrentPage, setDetailProduct }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered =
    activeCategory === 'all'
      ? products.slice(0, 4)
      : products.filter((p) => p.category === activeCategory).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-50 via-amber-50 to-green-50 py-16 px-4 text-center overflow-hidden">
        <div className="flex gap-3 justify-center mb-9 px-4">
          {heroImages.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`object-cover rounded-full border-4 border-white flex-shrink-0 ${
                i % 2 === 1 ? '-mt-6 w-32 h-44' : 'w-36 h-48'
              }`}
            />
          ))}
        </div>
        <p className="text-xs font-medium text-rose-500 tracking-widest uppercase mb-3">
          Fresh · Handcrafted · Order - AT your Doorstep 
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-rose-900 leading-tight mb-4">
          Every Bloom<br />Tells a <em className="text-green-700">Story</em>
        </h1>
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-8 leading-relaxed">
          Discover nature's finest arrangements, carefully handcrafted for life's most beautiful moments.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() => setCurrentPage('products')}
            className="bg-rose-600 hover:bg-rose-800 text-white px-7 py-3.5 rounded-xl text-sm font-medium transition"
          >
            Shop Now
          </button>
          <button
            onClick={() => openWhatsApp("Hi! I'd like to browse your collection.")}
            className="bg-white border-2 border-rose-500 text-rose-600 hover:bg-rose-50 px-7 py-3.5 rounded-xl text-sm font-medium flex items-center gap-2 transition"
          >
            <WaIcon /> Order on WhatsApp
          </button>
        </div>
      </div>

      {/* Featured */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <p className="text-xs text-rose-500 font-medium tracking-widest uppercase mb-2">Our Collection</p>
        <h2 className="font-serif text-3xl text-gray-900 mb-8">Featured Arrangements</h2>
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onClick={() => { setDetailProduct(p); setCurrentPage('detail'); }} />
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setCurrentPage('products')} className="border border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-xl text-sm font-medium transition">
            View All Flowers
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="bg-rose-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-rose-500 font-medium tracking-widest uppercase mb-2">Why Choose Us</p>
          <h2 className="font-serif text-3xl text-gray-900 mb-10">The Bloom &amp; Co. Promise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border border-rose-100 text-center">
                <h3 className="font-serif text-base text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
