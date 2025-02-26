import './App.css';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
import Cart from './Components/Cart';
import Hero from './Components/Hero';
import Shop from './Components/Shop';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [favourites, setFavourites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavourite = (productId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(productId)
        ? prevFavourites.filter(id => id !== productId)
        : [...prevFavourites, productId]
    );
  };

  const addToCart = (productId) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
    }
  };

  return (
    <>
      <Navbar favouritesCount={favourites.length} cartCount={cart.length} />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/shop" element={<Shop toggleFavourite={toggleFavourite} favourites={favourites} addToCart={addToCart} cart={cart} />} />
        <Route path="/favourites" element={<Favourites favourites={favourites} toggleFavourite={toggleFavourite} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
