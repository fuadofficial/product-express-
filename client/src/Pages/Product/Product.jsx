import React from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  // Mock product data
  const product = {
    id,
    name: 'Product ' + id,
    description: 'Description for product ' + id,
    images: [
      '/src/assets/images/product1.jpg',
      '/src/assets/images/product2.jpg',
      '/src/assets/images/product3.jpg',
      '/src/assets/images/product4.jpg'
    ]
  };

  return (
    <div className="product">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <ProductGallery images={product.images} />
    </div>
  );
};

export default Product;
