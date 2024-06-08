import React from 'react';
import axios from 'axios';
import {Form, Input, Button, InputNumber} from 'antd';
import { useNavigate } from 'react-router';

const CreateProduct = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        try {
            await axios.post('http://localhost:8000/products', values);
            console.log('navigate');
            navigate('/');
        } catch(error) {
            console.dir(error);
            alert(error);
        }
    };
    
    return (
        <div>
            <h1>Создание продукта</h1>
            <Form
                name="basic"
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="title"
                    rules={[{ required: true, message: 'Название обязательно' }]}
                >
                    <Input className="admin-input" placeholder="Название продукта" />
                </Form.Item>

                <Form.Item
                    name="description"
                    rules={[{ required: true, message: 'Описание обязательно' }]}
                >
                    <Input.TextArea rows={4} className="login-input" placeholder="Описание" />
                </Form.Item>

                <Form.Item
                    name="price"
                    rules={[{ required: true, message: 'Цена обязательно' }]}
                >
                    <InputNumber className="admin-input" placeholder="Цена продукта" />
                </Form.Item>

                <Form.Item
                    name="sku"
                    rules={[{ required: true, message: 'Sku обязательно' }]}
                >
                    <InputNumber className="admin-input" placeholder="Sku" />
                </Form.Item>

                <Form.Item
                    name="category"
                    rules={[{ required: true, message: 'Категория обязательно' }]}
                >
                    <Input className="admin-input" placeholder="Категория продукта" />
                </Form.Item>

                <Form.Item
                    name="image"
                    rules={[{ required: true, message: 'Картинка обязательно' }]}
                >
                    <Input className="admin-input" placeholder="Ссылка на картинку" />
                </Form.Item>

                <Button htmlType="submit">Сохранить</Button>
            </Form>
        </div>
    );
};

export default CreateProduct;