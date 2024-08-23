import { useContext, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Home.css';
import axios from 'axios';
import { ProductsContext } from '../../context/ProductsContext';

const API_URL = "http://localhost:3000/";

const Home = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios(API_URL);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="home">
      {products.map((product, index) => (
        <div key={index}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Home;
