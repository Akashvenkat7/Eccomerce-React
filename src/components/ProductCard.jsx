// src/components/ProductCard.jsx
import React, { useState } from 'react';

const ProductCard = ({ product, addToCart, isInCart, buyNow }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowMore = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col items-center">
      <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-64 object-contain mb-4" 
      />
      <h3 className="text-lg font-bold mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-2 text-left font-bold">${product.price.toFixed(2)}</p>
      <div className="text-sm text-gray-600 mb-4 text-left">
        <p className={`${showFullDescription ? '' : 'line-clamp-2'}`}>
          {product.description}
        </p>
        {product.description.length > 100 && (
          <button
            onClick={handleShowMore}
            className="text-blue-500 hover:underline"
          >
            {showFullDescription ? 'Show Less' : 'More'}
          </button>
        )}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => addToCart(product)}
          disabled={isInCart}
          className={`px-4 py-2 rounded ${isInCart ? 'bg-gray-400' : 'bg-yellow-400 hover:bg-yellow-500'} text-black`}
        >
          {isInCart ? 'Added to Cart' : '🛒 Add to Cart'}
        </button>
        <button
          onClick={() => buyNow(product)}
          className="bg-orange-500 hover:bg-orange-600 hover:transition 0.3s text-black px-4 py-2 rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
