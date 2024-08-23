import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(item => item.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    }
  }, [id, products]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="product">
      <div className="product-gallery">
        <ProductGallery images={product.images} product={product} />
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <div className="product-info">
          <span className="product-price">${product.price}</span>
          <span className="product-discount">Discount: {product.discountPercentage}%</span>
          <span className="product-rating">Rating: {product.rating}⭐⭐⭐⭐</span>
          <span className="product-stock">Stock: {product.stock}</span>
          <span className="product-brand">Brand: {product.brand}</span>
          <span className="product-category">Category: {product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
