import './Favourites.css';
import PRODUCT_DETAILS from './Data';

export default function Favourites({ favourites }) {
  // Filter the products that are in the favourites list
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
            </div>
          ))
        ) : (
          <p>No favourites yet!</p>
        )}
      </div>
    </div>
  );
}
