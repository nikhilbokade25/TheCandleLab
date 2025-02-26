import './Shop.css';
import PRODUCT_DETAILS from './Data';
import { FaHeart } from 'react-icons/fa';

export default function Shop({ toggleFavourite, favourites = [], addToCart, cart = [] }) {
  return (
    <div className="shop_container">
      <div className="shop_products">
        {PRODUCT_DETAILS.map((product) => {
          const isInCart = cart.includes(product.id);

          return (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product_details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div className="product_buttons">
                <button 
                  className="btn" 
                  onClick={() => addToCart(product.id)} 
                  disabled={isInCart}
                >
                  {isInCart ? "Added to Cart" : "Add to Cart"}
                </button>
                <button className="btn" onClick={() => toggleFavourite(product.id)}>
                  <FaHeart color={favourites.includes(product.id) ? 'red' : 'gray'} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
