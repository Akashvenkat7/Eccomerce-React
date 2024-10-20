// src/components/CartModal.jsx
import React from 'react';

const CartModal = ({ cartItems, removeFromCart, updateQuantity, closeCart }) => {
  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-3/4 md:w-1/2 p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-12 h-12 object-cover" />
                  <div>
                    <span>{item.title}</span>
                    <p className="text-sm text-gray-600">Price: <span className="font-bold">${item.price.toFixed(2)}</span></p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="bg-gray-300 px-2 rounded"
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="bg-gray-300 px-2 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Subtotal: <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span></p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right font-bold text-lg mb-4">
              Total: ${totalPrice.toFixed(2)}
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded font-bold">
              Proceed to Checkout
            </button>
          </>
        )}
        <button onClick={closeCart} className="mt-4 bg-gray-700 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
