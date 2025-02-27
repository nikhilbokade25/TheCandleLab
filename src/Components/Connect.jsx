import './Connect.css';
import contactImg from "../Assets/contact_image.png";

export default function Connect() {
    return (
        <div className="connect_container">
            <div className='connect_content'>
                <div className='connect_text'>
                    <h2>Contact Us</h2>
                    <p><strong>Workshop Bookings & Inquiries:</strong> <a href="mailto:bookings@thecandlelab.com">bookings@thecandlelab.com</a></p>
                    <p><strong>Product Issues:</strong> <a href="mailto:support@thecandlelab.com">support@thecandlelab.com</a></p>
                    <p><strong>Online Order Assistance:</strong> <a href="mailto:orders@thecandlelab.com">orders@thecandlelab.com</a></p>
                    <p><strong>Wholesale Assistance:</strong> <a href="mailto:wholesale@thecandlelab.com">wholesale@thecandlelab.com</a></p>
                    <p><strong>General Inquiries:</strong> <a href="mailto:contact@thecandlelab.com">contact@thecandlelab.com</a></p>
                    <p>We do our absolute best to respond to every email, but sometimes we’re busy crafting the perfect scents! Thank you for your patience. </p>
                </div>

                <div className='connect_image'>
                    <img src={contactImg} alt='contact phone' />
                </div>
            </div>

            <div className='connect_form'>
                <div className='form_text'>
                    <h2>Have Questions? Let's Talk!</h2>
                    <p>We’re here to help with anything you need—whether it’s product inquiries, order assistance, or just finding the perfect scent. Reach out to us via email or fill out the form, and we’ll get back to you as soon as possible. Let’s make your candle experience truly special! </p>
                </div>

                <div className='form'>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Type your message" required></textarea>

                    <button type="submit">Submit</button>
                </form>
                
                </div>
            </div>
        </div>
    );
}
