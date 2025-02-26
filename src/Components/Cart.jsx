import './Cart.css';
import PRODUCT_DETAILS from './Data';
import { useState } from 'react';

export default function Cart({ cart, setCart }) {
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, productId) => {
      acc[productId] = 1;
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
      if (newQuantity === 1) {
        return { ...prevQuantities, [productId]: newQuantity };
      } else if (newQuantity <= 0) {
        setCart((prevCart) => prevCart.filter((id) => id !== productId));
        return prevQuantities;
      }
      return { ...prevQuantities, [productId]: newQuantity };
    });
  };

  const calculatePrice = (product, quantity) => {
    const price = parseFloat(product.price.replace('$', ''));
    return quantity >= 2
      ? `$${(price * quantity * 0.9).toFixed(2)}` // 10% discount
      : `$${(price * quantity).toFixed(2)}`;
  };

  // Calculate total number of items
  const totalItems = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);

  // Calculate total price
  const totalPrice = cartProducts.reduce((sum, product) => {
    const price = parseFloat(product.price.replace('$', ''));
    const quantity = quantities[product.id] || 1;
    return sum + (quantity >= 2 ? price * quantity * 0.9 : price * quantity);
  }, 0);

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

      {/* Total and Checkout Section */}
      {cartProducts.length > 0 && (
        <div className="cart_summary">
          <p>Total Items: <span>{totalItems}</span></p>
          <p>Total Price: <span>${totalPrice.toFixed(2)}</span></p>
          <button className="checkout_btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}
