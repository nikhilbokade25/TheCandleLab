import './Cart.css';
import PRODUCT_DETAILS from './Data';
import { useState } from 'react';

export default function Cart({ cart }) {
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
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(1, prevQuantities[productId] - 1),
    }));
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
                <p>{product.price}</p>
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

