import './Cart.css';
import PRODUCT_DETAILS from './Data';
import { useState } from 'react';

export default function Cart({ cart, setCart }) {
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, productId) => {
      acc[productId] = 1; // Initial quantity of each product in the cart is 1
      return acc;
    }, {})
  );

  const cartProducts = PRODUCT_DETAILS.filter((product) => cart.includes(product.id));

  const increaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[productId] - 1;

      // Check if the new quantity is 1 before removing the product from the cart
      if (newQuantity === 1) {
        return {
          ...prevQuantities,
          [productId]: newQuantity, // Set to 1
        };
      } else if (newQuantity <= 0) {
        // If it's 0 or less, remove the product from the cart
        setCart((prevCart) => prevCart.filter((id) => id !== productId));
        return prevQuantities; // Return the previous quantities to avoid setting a negative quantity
      }

      return {
        ...prevQuantities,
        [productId]: newQuantity,
      };
    });
  };

  const calculatePrice = (product, quantity) => {
    // Convert the price from string to number
    const price = parseFloat(product.price.replace('$', ''));
    
    // If quantity is 2 or more, apply a discount or change the price
    if (quantity >= 2) {
      // Example: Apply a 10% discount for quantities of 2 or more
      return `$${(price * quantity * 0.9).toFixed(2)}`; // Discounted price
    } else {
      return `$${(price * quantity).toFixed(2)}`; // Regular price
    }
  };

  return (
    <div className="cart_container">
      <h2>Shopping Cart</h2>
      <div className="cart_products">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div key={product.id} className="cart_product">
              <img src={product.image} alt={product.name} className="cart_product_image" />
              <div className="cart_product_details">
                <h3>{product.name}</h3>
                {/* Display the updated price */}
                <p>{calculatePrice(product, quantities[product.id])}</p>
                <div className="quantity_controls">
                  <button className="quantity_btn" onClick={() => decreaseQuantity(product.id)}>-</button>
                  <span className="quantity_number">{quantities[product.id]}</span>
                  <button className="quantity_btn" onClick={() => increaseQuantity(product.id)}>+</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
}
