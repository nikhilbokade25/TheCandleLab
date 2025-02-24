import './Shop.css';
import PRODUCT_DETAILS from './Data';
import { FaHeart } from 'react-icons/fa';

export default function Shop({ toggleFavourite, favourites }) {
  return (
    <div className="shop_container">
      <div className="shop_products">
        {PRODUCT_DETAILS
          .filter((product) => product.id >= 1 && product.id <= 4)
          .map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product_details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div className="product_buttons">
                <button className="btn">ADD TO CART</button>
                <button
                  className="btn"
                  onClick={() => toggleFavourite(product.id)}>
                  <FaHeart color={favourites.includes(product.id) ? 'red' : 'gray'} />
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="shop_products">
        {PRODUCT_DETAILS
          .filter((product) => product.id >= 5 && product.id <= 8)
          .map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product_details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div className="product_buttons">
                <button className="btn">ADD TO CART</button>
                <button
                  className="btn"
                  onClick={() => toggleFavourite(product.id)}>
                  <FaHeart color={favourites.includes(product.id) ? 'red' : 'gray'} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
