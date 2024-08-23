import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.description}</p>
      <Link to={`/product/${product.id}`} className="product-card__link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
