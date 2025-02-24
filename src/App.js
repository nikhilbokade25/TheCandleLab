import './App.css';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
import Cart from './Components/Cart';
import Hero from './Components/Hero';
import Shop from './Components/Shop';
import { useState } from 'react';  
import { Routes, Route } from 'react-router-dom';

function App() {
  const [favourites, setFavourites] = useState([]);  // Keep track of favourited products

  // Function to add or remove a product from favourites
  const toggleFavourite = (productId) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.includes(productId)) {
        // If already in favourites, remove it
        return prevFavourites.filter(id => id !== productId);
      } else {
        // If not in favourites, add it
        return [...prevFavourites, productId];
      }
    });
  };

  return (
    <>
      <Navbar favouritesCount={favourites.length} toggleFavourite={toggleFavourite} />

      {/* The Routes are now only for the page content */}
      <Routes>
        <Route path='favourites' element={<Favourites />} />
        <Route path='cart' element={<Cart />} />
        <Route path='shop' element={<Shop toggleFavourite={toggleFavourite} favourites={favourites} />} />
        <Route path='/' element={<Hero />} /> {/* Make Hero the default landing page */}
      </Routes>
    </>
  );
}

export default App;
