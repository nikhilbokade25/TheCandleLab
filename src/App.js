import './App.css';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
import Cart from './Components/Cart';
import Hero from './Components/Hero';
import Shop from './Components/Shop';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [favourites, setFavourites] = useState([]);  // Keep track of favorited products

  // Function to add or remove a product from favorites
  const toggleFavourite = (productId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(productId)) {
        // If already in favorites, remove it
        return prevFavourites.filter(id => id !== productId);
      } else {
        // If not in favorites, add it
        return [...prevFavourites, productId];
      }
    });
  };

  return (
    <>
      <Navbar favouritesCount={favourites.length} toggleFavourite={toggleFavourite} />
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/shop" element={<Shop toggleFavourite={toggleFavourite} favourites={favourites} />} />
        <Route path="favourites" element={<Favourites favourites={favourites} toggleFavourite={toggleFavourite} />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
