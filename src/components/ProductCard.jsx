import { useCart } from "../context/CartContext";
import { Plus } from "lucide-react";

const ProductCard = ({ product, onClick }) => {
  const { addToCart } = useCart();

  return (
    <div 
      className="glass-card-premium cursor-pointer flex flex-col h-full group"
      onClick={onClick}
    >
      <div className="p-3">
        <div className="relative overflow-hidden rounded-xl bg-white/50 aspect-square">
          <img 
            src={product.img} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
          />
          {/* Overlay to make it feel premium */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="font-serif font-semibold text-lg text-gray-800 line-clamp-1">{product.name}</h2>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 flex-grow">{product.description}</p>

        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200/50">
          <span className="text-rose-600 font-bold text-lg">
            Rs {product.price}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              addToCart(product);
            }}
            className="glass-button w-10 h-10 rounded-full flex items-center justify-center text-rose-600 hover:text-white hover:bg-rose-500 hover:border-rose-500"
            aria-label="Add to cart"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;