import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar({ currentPage, setCurrentPage }) {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  const navLink = (name, label) => (
    <button
      onClick={() => {
        setCurrentPage(name);
        setOpen(false);
      }}
      className={`transition-all duration-300 px-4 py-2 rounded-xl ${
        currentPage === name
          ? "text-rose-600 font-semibold bg-white/60 shadow-sm border border-white/80"
          : "text-gray-600 hover:text-rose-500 hover:bg-white/40 hover:shadow-sm"
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="glass-nav py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

        {/* Logo */}
        <div
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <img src={logo} alt="logo" className="h-10 drop-shadow-md" />
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLink("home", "Home")}
          {navLink("products", "Products")}
          {navLink("contact", "Contact")}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Cart */}
          <div
            onClick={() => setCurrentPage("cart")}
            className="relative cursor-pointer hover:scale-110 transition-transform duration-300 glass-button p-2 rounded-full flex items-center justify-center"
          >
            <ShoppingCart size={20} className="text-gray-700" />

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-pulse-slow">
                {totalItems}
              </span>
            )}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden glass-button p-2 rounded-xl text-gray-700"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 flex flex-col gap-2 text-sm glass rounded-2xl shadow-xl border border-white/50 z-50">
          {navLink("home", "Home")}
          {navLink("products", "Products")}
          {navLink("contact", "Contact")}
          <button
            onClick={() => {
              setCurrentPage("cart");
              setOpen(false);
            }}
            className="text-left px-4 py-2 text-gray-600 hover:text-rose-500 hover:bg-white/40 rounded-xl transition-all"
          >
            Cart ({totalItems})
          </button>
        </div>
      )}
    </nav>
  );
}