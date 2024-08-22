import React from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';

const products = [
    { id: 1, name: 'Product 1', price: 100, description: 'Detailed description of Product 1', images: ['/assets/product1.jpg', '/assets/product1_1.jpg', '/assets/product1_2.jpg'] },
    { id: 2, name: 'Product 2', price: 150, description: 'Detailed description of Product 2', images: ['/assets/product2.jpg', '/assets/product2_1.jpg', '/assets/product2_2.jpg'] },
    { id: 3, name: 'Product 3', price: 200, description: 'Detailed description of Product 3', images: ['/assets/product3.jpg', '/assets/product3_1.jpg', '/assets/product3_2.jpg'] },
];

const Product = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className="product-details">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div className="product-images">
                {product.images.map((image, index) => (
                    <img key={index} src={image} alt={`${product.name} ${index + 1}`} />
                ))}
            </div>
        </div>
    );
};

export default Product;
