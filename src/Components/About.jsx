import './About.css';
import aboutImg from "../Assets/about_image.jpg";
import aboutImg1 from "../Assets/about_image_1.jpg";
import team1 from "../Assets/team_1.jpg";
import team2 from "../Assets/team_2.jpg";
import team3 from "../Assets/team_3.jpg";
import team4 from "../Assets/team_4.jpg";

export default function About(){
    return(
        <div className="about_container">

            <div className='about_text'>
                <h1>Who is The Candle Lab?</h1>
                <p>At The Candle Lab, we create premium scented candles designed to fill your space with warmth and fragrance. Our hand-poured candles are made with care using high-quality ingredients, offering unique scents to suit every mood. Whether you're relaxing at home, hosting friends, or setting the perfect atmosphere, we’ve got a candle for you. Our mission is to bring a little bit of joy and serenity into your daily routine with every candle. Crafted with passion and love, we are here to light up your moments and brighten your world, one scent at a time.</p>
            </div>

            <div className='about_image'>
                <img src={aboutImg} alt='scented cnadle' />
            </div>

            <div className='about_image_1'>
                <img src={aboutImg1} alt='scented candle' />
            </div>

            <div className='about_text_1'>
                <h1>Why The Candle Lab?</h1>
                <p>At The Candle Lab, we believe candles should be more than just a fragrance—they should create an experience. Our hand-poured candles are made with high-quality, eco-friendly ingredients that give you a clean burn and long-lasting scent. Whether you’re winding down after a long day or setting the mood for a special occasion, we’ve got the perfect scent for you.

What makes us different? It’s our passion for quality and sustainability. Each candle is crafted with care, and we take pride in offering a wide variety of unique scents to match any vibe. From cozy evenings to refreshing mornings, The Candle Lab is here to help you create moments that matter.</p>
            </div>

            <div className='meet_team_container'>
                <h1>Meet The Candle Lab</h1>

                <div className='team_details'>
                    <div className='team_1 team_profile'>
                        <img src={team1} alt='team member' />
                        <h2>Ella Johnson</h2>
                    </div>
                    
                    <div className='team_2 team_profile'>
                        <img src={team2} alt='team member' />
                        <h2>Sophia Williams</h2>
                    </div>
                    
                    <div className='team_3 team_profile'>
                        <img src={team3} alt='team member' />
                        <h2>Liam Davis</h2>
                    </div>
                    
                    <div className='team_4 team_profile'>
                        <img src={team4} alt='team member' />
                        <h2>Noah Carter</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}