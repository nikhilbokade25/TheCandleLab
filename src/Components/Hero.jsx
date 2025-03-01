import './Hero.css';
import heroBackgroundImg from "../Assets/hero_background2.jpg";
import workshopImg from "../Assets/hero_workshop.jpg";
import mailIcon from "../Assets/mail_icon.png";
import { Link } from 'react-router-dom'; 

export default function Hero() {
    return (
        <div className="hero_container">
            <div className='hero_img'>
                <img src={heroBackgroundImg}  alt='hero background'/>
                <h2>Light Up Your Moments</h2>
                <p>Discover our wide variety of candles to brighten your day!</p>
                <Link to="/shop">
                
                <button>SHOP NOW</button>
                </Link>
            </div>

            <div className='hero_workshop'>
                <img src={workshopImg} alt='candle workshop' />
                <div className='workshop_content'>
                    <h2>Candle Lab Workshops</h2>
                    <p>Unleash your creativity and craft your own signature candles and diffusers! 🌿✨ Gather your friends, sip some wine 🍷, and enjoy a hands-on experience. Join a public workshop or book a private session for a truly unforgettable time! 🕯️🎨</p>
                    <button>Browse Workshops</button>
                </div>
            </div>

            <div className='hero_footer'>
                <div className='footer_mail'>
                    <div className='mail_text'>
                        <img src={mailIcon} alt='candle icon'/>
                        <p>Stay up to date with the latest product drops, exciting new workshops, and all the fun Milk Jar happenings!</p>
                        <button>JOIN MAILING LIST</button>
                    </div>
                    
                </div>

                <div className='footer_links'>
                    <div className='footer_help'>
                    <h3>CUSTOMER CARE</h3>
                    <ul>
                        <li><a href="/">Help & FAQs</a></li>
                        <li><a href="/">Shipping</a></li>
                        <li><a href="/">Returns & Exchanges</a></li>
                        <li><a href="/">Order Tracking</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                    </div>

                    <div className='footer_find'>
                        <h3>FIND US</h3>
                        <ul>
                            <li><a href="/">Locate </a></li>
                            <li><a href="/">Retailers</a></li>
                            <li><a href="/">Store Near Me</a></li>
                            <li><a href="/">Find A Shop</a></li>
                        </ul>
                    </div>

                    <div className='footer_legal'>
                        <h3>LEGAL</h3>
                        <ul>
                            <li><a href="/">Site map </a></li>
                            <li><a href="/">Terms Of Use</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Ad Preferences</a></li>
                        </ul>
                    </div>

                    <div className='footer_connect'>
                        <h3>CONNECT</h3>
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
