// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, addToCart, cartItems, buyNow }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          isInCart={cartItems.some(item => item.id === product.id)}
          buyNow={buyNow}
        />
      ))}
    </div>
  );
};

export default ProductList;
