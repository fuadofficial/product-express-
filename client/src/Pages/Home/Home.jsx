import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';

const products = [
    { id: 1, name: 'Product 1', price: 100, image: '/assets/product1.jpg' },
    { id: 2, name: 'Product 2', price: 150, image: '/assets/product2.jpg' },
    { id: 3, name: 'Product 3', price: 200, image: '/assets/product3.jpg' },
];

const Home = () => {
    return (
        <div className="home">
            <h1>Products</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
