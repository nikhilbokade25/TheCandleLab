import './Checkout.css';

export default function Checkout() {
    
    return (
        <div className="checkout_container">
            <h1>Checkout</h1>

            <div className="checkout_section">
                <h2>Shipping Address</h2>
                <form className="checkout_form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="text" placeholder="Address Line 1" required />
                    <input type="text" placeholder="Address Line 2" />
                    <input type="text" placeholder="City" required />
                    <input type="text" placeholder="State" required />
                    <input type="text" placeholder="ZIP Code" required />
                    <input type="email" placeholder="Email Address" required />
                </form>
            </div>

            <div className="checkout_section">
                <button className="checkout_button">Continue to Payment</button>
            </div>
        </div>
    );
}
