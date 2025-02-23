import './Navbar.css';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
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
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">SHOP</a>
                <a href="#">CONNECT</a>
      

                {isNavOpen && (
                    <button className='nav_btn nav_close_btn' onClick={showNavBar}>
                        <FaTimes />
                    </button>
                )}
            </nav>
            <div className="nav_icons">
                <button onClick={() => navigate('favourites')}>
                    <FaHeart className='nav_btn_fav' />
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
