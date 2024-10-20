// src/components/Navbar.jsx
import React from 'react';

const Navbar = ({ cartCount, openCart, handleSearch }) => {
  return (
    <nav className="bg-gray-800 p-6 shadow-lg">
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          AK Store
        </div>
        <div className="flex space-x-8 text-2xl text-white  font-bold ">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="#products" className="hover:text-gray-300">Products</a>
          <a href="#service" className="hover:text-gray-300">Service</a>
          <a href="#about" className="hover:text-gray-300">About</a>
        </div>
        <div className="relative flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => handleSearch(e.target.value)}
            className="p-2 rounded"
          />
          <div onClick={openCart} className="relative cursor-pointer text-white">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-center text-sm">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
