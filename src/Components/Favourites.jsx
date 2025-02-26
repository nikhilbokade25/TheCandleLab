// import './Favourites.css';
// import PRODUCT_DETAILS from './Data';
// import { FaHeart } from 'react-icons/fa';

// export default function Favourites({ favourites, toggleFavourite }) {
//   // Filter the products that are in the favourites list
//   const favouriteProducts = PRODUCT_DETAILS.filter((product) =>
//     favourites.includes(product.id)
//   );

//   return (
//     <div className="favourites_container">
//       <h2>Favourites</h2>
//       <div className="favourites_products">
//         {favouriteProducts.length > 0 ? (
//           favouriteProducts.map((product) => (
//             <div key={product.id} className="product">
//               <img src={product.image} alt={product.name} />
//               <div className="product_details">
//                 <h3>{product.name}</h3>
//                 <p>{product.price}</p>
//               </div>
//               <div className="product_buttons">
//                 {/* Add to Cart Button */}
//                 <button className="btn">ADD TO CART</button>
                
//                 {/* Heart Button for Toggling Favourite */}
//                 <button
//                   className="btn"
//                   onClick={() => toggleFavourite(product.id)}>
//                   <FaHeart color={favourites.includes(product.id) ? 'red' : 'gray'} />
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No favourites yet!</p>
//         )}
//       </div>
//     </div>
//   );
// }


import './Favourites.css';
import PRODUCT_DETAILS from './Data';
import { FaHeart } from 'react-icons/fa';

export default function Favourites({ favourites, toggleFavourite, cart, addToCart }) {
  const favouriteProducts = PRODUCT_DETAILS.filter((product) =>
    favourites.includes(product.id)
  );

  return (
    <div className="favourites_container">
      <h2>Favourites</h2>
      <div className="favourites_products">
        {favouriteProducts.length > 0 ? (
          favouriteProducts.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product_details">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
              <div className="product_buttons">
                {/* Display 'Added to Cart' if the product is already in the cart */}
                <button
                  className="btn"
                  onClick={() => addToCart(product.id)}
                  disabled={cart.includes(product.id)}
                >
                  {cart.includes(product.id) ? 'Added to Cart' : 'ADD TO CART'}
                </button>
                
                {/* Heart Button for Toggling Favourite */}
                <button
                  className="btn"
                  onClick={() => toggleFavourite(product.id)}
                >
                  <FaHeart color={favourites.includes(product.id) ? 'red' : 'gray'} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No favourites yet!</p>
        )}
      </div>
    </div>
  );
}
