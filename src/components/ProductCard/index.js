import React from 'react';
import './style.css';
import { useNavigate } from 'react-router';
import { Button } from 'antd';

const ProductCard = ({imageUrl, title, price, id, isAdmin}) => {
    const nav = useNavigate();

    const handleClickProduct = () => {
        nav(`/product/${id}`)
    };

    return (
        <div className="product-card" onClick={handleClickProduct}>
            <img src={imageUrl} />
            <h4 className="product-title">{title}</h4>
            <p className="product-price">$ {price},00</p>

            {
                isAdmin && (
                    <div>
                        <Button>Скрыть</Button>
                        <Button danger>Удалить</Button>
                    </div>
                )
            }
        </div>
    );
};

export default ProductCard;