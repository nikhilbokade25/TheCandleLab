import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Favourites from './Components/Favourites';
import Cart from './Components/Cart';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='favourites' element={<Favourites />} />
        <Route path='cart' element={<Cart/>} />
      </Routes>

    </>
  );
}

export default App;
