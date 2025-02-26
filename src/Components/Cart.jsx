import './Cart.css';
import PRODUCT_DETAILS from './Data';

export default function Cart({ cart }) {
  const cartProducts = PRODUCT_DETAILS.filter((product) => cart.includes(product.id));

  return (
    <div className="cart_container">
      <h2>Shopping Cart</h2>
      <div className="cart_products">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product_details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
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
