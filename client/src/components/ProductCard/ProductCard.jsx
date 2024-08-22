import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <Link to={`/product/${product.id}`} className="product-card__link">View Details</Link>
    </div>
  );
};

export default ProductCard;
