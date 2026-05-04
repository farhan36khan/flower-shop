import React from 'react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  return (
    <nav className="bg-white border-b p-4 flex justify-between">

      <button
        onClick={() => setCurrentPage('home')}
        className="font-bold text-rose-600"
      >
        🌸 Bloom Shop
      </button>

      <div className="flex gap-4">

        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('products')}>Shop</button>
        <button onClick={() => setCurrentPage('contact')}>Contact</button>

      </div>

    </nav>
  );
};

export default Navbar;