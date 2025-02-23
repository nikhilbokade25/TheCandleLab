import './Hero.css';
import heroBackgroundImg from "../Assets/hero_background2.jpg";

export default function Hero() {
    return (
        <div className="hero_container">
            <img className="background_img" src={heroBackgroundImg} alt="candle background" />
            
            <h2>Light Up Your Moments</h2>
            <p>Discover our wide variety of candles to brighten your day!</p>
            <button>SHOP NOW</button>
            </div>
        
    );
}
