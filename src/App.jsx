// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import Footer from './components/Footer'; // Import the Footer component

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log("Error fetching products:", err));
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
      )
    );
  };

  const buyNow = (product) => {
    alert(`Proceed to checkout for ${product.title}`);
    // Implement your buy now logic, e.g., redirect to checkout page
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar 
        cartCount={cartItems.length} 
        openCart={openCart} 
        handleSearch={setSearchQuery} 
      />
      <ProductList 
        products={filteredProducts} 
        addToCart={addToCart} 
        cartItems={cartItems} 
        buyNow={buyNow} 
      />
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          closeCart={closeCart}
        />
      )}
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
}

export default App;
