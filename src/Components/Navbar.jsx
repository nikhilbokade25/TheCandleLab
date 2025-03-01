import './Navbar.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar({ favouritesCount, cartCount }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavBar = () => {
    setIsNavOpen(!isNavOpen);
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
    navRef.current.classList.remove("responsive_nav");
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeNavBar();  
  };

  return (
    <div className="header">
      <h2 onClick={() => handleNavigation('/home')}>The Candle Lab</h2>
      <nav ref={navRef}>
        <a onClick={() => handleNavigation('/home')}>HOME</a>
        <a onClick={() => handleNavigation('/about')}>ABOUT</a>
        <a onClick={() => handleNavigation('/shop')}>SHOP</a>
        <a onClick={() => handleNavigation('/connect')}>CONNECT</a>

        {isNavOpen && (
          <button className='nav_btn nav_close_btn' onClick={showNavBar}>
            <FaTimes />
          </button>
        )}
      </nav>

      <div className="nav_icons">
        <button onClick={() => handleNavigation('/favourites')} className="icon_btn">
          <FaHeart className='nav_btn_fav' />
          {favouritesCount > 0 && <span className="count_badge">{favouritesCount}</span>}
        </button>
        
        <button onClick={() => handleNavigation('/cart')} className="icon_btn">
          <FaShoppingCart className='nav_btn_cart' />
          {cartCount > 0 && <span className="count_badge">{cartCount}</span>}
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
