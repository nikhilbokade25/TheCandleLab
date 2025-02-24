import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
import Cart from './Components/Cart';
import Hero from './Components/Hero';
import Shop from './Components/Shop';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='favourites' element={<Favourites />} />
        <Route path='cart' element={<Cart/>} />
      </Routes>
      <Hero />
      <Shop />

    </>
  );
}

export default App;
