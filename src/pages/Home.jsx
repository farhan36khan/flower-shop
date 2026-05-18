import React, { useState } from "react";
import { products, openWhatsApp } from "../data/products";
import ProductCard from "../components/ProductCard";
import CategoryFilter from "../components/CategoryFilter";
import { ShieldCheck, Clock, MessageCircle, Gift, ArrowRight, Sparkles } from "lucide-react";

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
  </svg>
);

const heroImages = [
  { src: "/images/rose.jpg" },
  { src: "/images/mixrose.jpg" },
  { src: "/images/pink.jpg" },
  { src: "/images/sunflower.jpg" },
];

const features = [
  {
    title: "Handpicked Daily",
    text: "Sourced directly from local elite farms every morning.",
    icon: <ShieldCheck className="w-10 h-10 text-rose-500 mb-6 drop-shadow-md" />
  },
  {
    title: "Express Delivery",
    text: "Pristine condition delivery within hours.",
    icon: <Clock className="w-10 h-10 text-rose-500 mb-6 drop-shadow-md" />
  },
  {
    title: "Bespoke Styling",
    text: "Customize your order instantly via chat.",
    icon: <MessageCircle className="w-10 h-10 text-rose-500 mb-6 drop-shadow-md" />
  },
  {
    title: "Luxury Wrapping",
    text: "Signature unboxing experience with every order.",
    icon: <Gift className="w-10 h-10 text-rose-500 mb-6 drop-shadow-md" />
  },
];

const Home = ({ setCurrentPage, setDetailProduct }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? products.slice(0, 4)
      : products
          .filter((p) => p.category === activeCategory)
          .slice(0, 4);

  return (
    <div className="relative overflow-hidden w-full">

      {/* Extreme Deep Blurred Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none fixed">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-rose-300/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-80 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-amber-200/40 rounded-full mix-blend-multiply filter blur-[100px] opacity-80 animate-blob" style={{animationDelay: "2s"}}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-80 animate-blob" style={{animationDelay: "4s"}}></div>
        <div className="absolute top-[40%] left-[40%] w-[30vw] h-[30vw] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob" style={{animationDelay: "6s"}}></div>
      </div>

      {/* 🌸 HERO SECTION */}
      <section className="relative pt-12 pb-24 sm:pt-20 sm:pb-32 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CLEAN ONE UI: Unified centered layout */}
        <div className="glass-premium rounded-[3rem] p-8 sm:p-12 lg:p-20 relative flex flex-col items-center text-center gap-16 min-h-[85vh]">
          
          {/* Subtle noise texture overlay for realism */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[3rem]" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"}}></div>

          {/* Centered Text Content */}
          <div className="w-full max-w-4xl relative z-10 mx-auto">
            <div className="animate-fade-in-up" style={{animationDelay: "0.1s"}}>
              <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass-button text-sm font-bold tracking-[0.2em] uppercase text-rose-600 mb-8 border border-white/90 shadow-[0_4px_15px_rgba(225,29,72,0.1)] hover:scale-105">
                <Sparkles size={16} className="animate-pulse-slow" /> Haute Couture Floral Design
              </div>
            </div>

            <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif text-gray-900 leading-[1.1] mb-8 drop-shadow-sm" style={{animationDelay: "0.3s"}}>
              Let Every Bloom <br className="hidden md:block" />
              Tell A <span className="text-gradient italic font-normal inline-block transform hover:scale-105 transition-transform duration-500 cursor-default">Story</span>
            </h1>

            <p className="animate-fade-in-up text-gray-600 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-light" style={{animationDelay: "0.5s"}}>
              Experience the pinnacle of floral artistry. Hand-selected, luxury arrangements crafted to elevate your most precious moments.
            </p>

            <div className="animate-fade-in-up flex flex-col sm:flex-row justify-center gap-6" style={{animationDelay: "0.7s"}}>
              <button
                onClick={() => setCurrentPage("products")}
                className="group relative overflow-hidden bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 text-white px-10 py-5 rounded-full text-lg font-medium shadow-[0_10px_30px_rgba(225,29,72,0.4)] hover:shadow-[0_15px_40px_rgba(225,29,72,0.6)] transition-all duration-500 flex items-center justify-center gap-3 hover:-translate-y-2 border border-rose-400/50"
              >
                <div className="absolute inset-0 animate-shimmer-bg opacity-50"></div>
                <span className="relative z-10 flex items-center gap-2">Explore Collection <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" /></span>
              </button>

              <button
                onClick={() => openWhatsApp("Hi! I'd like to order luxury flowers 🌸")}
                className="glass-button text-gray-800 px-10 py-5 rounded-full text-lg flex items-center justify-center gap-3 hover:-translate-y-2 group shadow-[0_10px_30px_rgba(0,0,0,0.05)] border-white"
              >
                <span className="text-[#25D366] group-hover:scale-110 transition-transform duration-500"><WaIcon /></span> Concierge
              </button>
            </div>
          </div>

          {/* Clean Row Grid Image Collage */}
          <div className="w-full relative animate-fade-in" style={{animationDelay: "0.8s"}}>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {heroImages.map((img, index) => (
                <div 
                  key={index} 
                  className="glass-premium p-3 sm:p-4 rounded-[2rem] shadow-xl hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl animate-fade-in-up group" 
                  style={{animationDelay: `${1 + (index * 0.2)}s`}}
                >
                  <div className="overflow-hidden rounded-[1.5rem] w-full aspect-[4/5] relative">
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none mix-blend-overlay"></div>
                    <img 
                      src={img.src} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                      alt={`Luxury Flower ${index + 1}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Soft glowing aura behind the images */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/10 rounded-full filter blur-[100px] -z-10 animate-pulse-slow pointer-events-none"></div>
          </div>

        </div>
      </section>

      {/* 🌼 FEATURED COLLECTION */}
      <section className="max-w-[90rem] mx-auto px-4 py-20 sm:py-32 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
            The Masterpiece Collection
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-300 mx-auto rounded-full mb-10 shadow-sm"></div>
          <CategoryFilter
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-10">
          {filtered.map((p, index) => (
            <div key={p.id} className="animate-fade-in-up" style={{animationDelay: `${0.2 * index}s`}}>
              <ProductCard
                product={p}
                onClick={() => {
                  setDetailProduct(p);
                  setCurrentPage("detail");
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-20 animate-fade-in-up">
          <button
            onClick={() => setCurrentPage("products")}
            className="glass-button text-gray-800 px-10 py-4 rounded-full hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] inline-flex items-center gap-3 text-lg transition-all duration-500"
          >
            View Full Collection <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* 🌟 LUXURY EXPERIENCE */}
      <section className="py-24 sm:py-32 relative">
        {/* NO BG WHITE BELOW IT - Removed the white/40 background layer to keep it totally clean */}
        <div className="max-w-[90rem] mx-auto px-4 relative z-10">

          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-6">
              The Bloom Standard
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-rose-400 to-amber-300 mx-auto rounded-full shadow-sm"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {features.map((f, index) => (
              <div
                key={f.title}
                className="glass-card-premium p-10 text-center group animate-fade-in-up"
                style={{animationDelay: `${0.2 * index}s`}}
              >
                <div className="flex justify-center transform group-hover:scale-125 group-hover:-translate-y-4 group-hover:rotate-3 transition-all duration-500">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-2xl mb-4 text-gray-800 font-serif">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg font-light">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;