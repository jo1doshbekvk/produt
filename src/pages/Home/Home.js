import React, { useEffect, useState } from 'react';
import {Button} from "antd";
import './style.css';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/products');
        console.log('response', response);
        setProducts(response.data);
      } catch(error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="big-image-block">
        <div>
          <p className="image-text">Gold big hoops </p>
          <p className="image-text">$ 68,00</p>
          <Button ghost type="default">VIEW PRODUCT</Button>
        </div>
      </div>

      <div className="top-content">
        <h2 className="home-title">Shop The Latest</h2>
        <Button type="text">View all</Button>
      </div>

      <div className="products-content">
        {
          products.map(product => (
            <ProductCard 
              imageUrl={product.image} 
              price={product.price} 
              title={product.title} 
              key={product.id}
              id={product.id}
              isAdmin={false}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Home;