import React, { useEffect } from 'react';
import './style.css';
import { useParams } from 'react-router';
import axios from 'axios';

const ProductCard = () => {
    const param = useParams();
    console.log('param', param);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/products/${param.id}`);
                console.log('product', response);
            } catch(error) {
                alert(error.message);
            }
        };

        fetchData();
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default ProductCard;