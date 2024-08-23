/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ProductCard.css';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  console.log(product);

  return (
    <div className="product-card">
      <img src={product.images} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <Link to={`/product/${product.id}`} className="product-card__link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
