import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';

const Home = () => {
  // Mock product data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description 1', image: '/src/assets/images/product1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/src/assets/images/product2.jpg' },
    // Add more products
  ];

  return (
    <div className="home">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
