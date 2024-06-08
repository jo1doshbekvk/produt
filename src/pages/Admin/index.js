import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import { Button } from 'antd';
import CreateProduct from './CreateProduct';

const Admin = () => {
    const [products, setProducts] = useState([]);
    const [create, setCreate] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/products');
                setProducts(res.data);
            } catch(error){
                alert(error.message);
            }
        }; 
        fetchData();
    }, []);
    return (
        <div className="admin">
            <div className="admin-header">
                <h1>Администрация</h1>
                <Button onClick={() => setCreate(!create)}>
                    {
                        create ? 'Скрыть' : 'Создать продукт'
                    }
                </Button>
            </div>
            
            {
                create && <CreateProduct />
            }

            <div className="admin-products">
                {
                    products.map(product => (
                        <ProductCard 
                            imageUrl={product.image} 
                            price={product.price} 
                            title={product.title} 
                            key={product.id}
                            id={product.id}
                            isAdmin={true}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Admin;