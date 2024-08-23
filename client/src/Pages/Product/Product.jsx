import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../../context/ProductsContext';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(itmes => itmes.id === parseInt(id));
    setProduct(foundProduct);
  }, []);

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <div className="product">
      <h1>{product.brand}</h1>
      <p>{product.description}</p>
      <ProductGallery thumbnai={product.thumbnai} images={product.images} />
    </div>
  );
};

export default Product;
