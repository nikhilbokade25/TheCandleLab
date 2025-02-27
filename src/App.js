import './App.css';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
import Cart from './Components/Cart';
import Hero from './Components/Hero';
import Shop from './Components/Shop';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Connect from './Components/Connect';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  // Toggle favourite products
  const toggleFavourite = (productId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(productId)
        ? prevFavourites.filter(id => id !== productId)
        : [...prevFavourites, productId]
    );
  };

  // Add product to cart (avoid duplicates)
  const addToCart = (productId) => {
    setCart((prevCart) =>
      prevCart.includes(productId) ? prevCart : [...prevCart, productId]
    );
  };

  return (
    <>
      <Navbar favouritesCount={favourites.length} cartCount={cart.length} />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/shop" element={<Shop toggleFavourite={toggleFavourite} favourites={favourites} addToCart={addToCart} cart={cart} />} />
        <Route path="favourites" element={<Favourites favourites={favourites} toggleFavourite={toggleFavourite} cart={cart} addToCart={addToCart} />} />
        <Route path="cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/connect" element={<Connect/>} />
      </Routes>
    </>
  );
}

export default App;
