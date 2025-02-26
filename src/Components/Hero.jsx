import './Hero.css';
import heroBackgroundImg from "../Assets/hero_background2.jpg";
import { Link } from 'react-router-dom'; 

export default function Hero() {
    return (
        <div className="hero_container">
            <img className="background_img" src={heroBackgroundImg} alt="candle background" />
            
            <h2>Light Up Your Moments</h2>
            <p>Discover our wide variety of candles to brighten your day!</p>
            <Link to="/shop">
               <button>SHOP NOW</button>
            </Link> 
            </div>
        
    );
}
