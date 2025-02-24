import './Navbar.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ favouritesCount, toggleFavourite }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavBar = () => {
    setIsNavOpen(!isNavOpen);
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header">
      <h2>The Candle Lab</h2>
      <nav ref={navRef}>
        <a onClick={() => navigate('/home')}>HOME</a>
        <a onClick={() => navigate('/about')}>ABOUT</a>
        <a onClick={() => navigate('/shop')}>SHOP</a>
        <a onClick={() => navigate('/connect')}>CONNECT</a>

        {isNavOpen && (
          <button className='nav_btn nav_close_btn' onClick={showNavBar}>
            <FaTimes />
          </button>
        )}
      </nav>

      <div className="nav_icons">
        <button onClick={() => navigate('favourites')}>
          <FaHeart className='nav_btn_fav' />
          {favouritesCount > 0 && <span className="fav_count">{favouritesCount}</span>}
        </button>
        <button onClick={() => navigate('cart')}>
          <FaShoppingCart className='nav_btn_cart' />
        </button>
      </div>

      {!isNavOpen && (
        <button className='nav_btn nav_menu_btn' onClick={showNavBar}>
          <FaBars />
        </button>
      )}
    </div>
  );
}
