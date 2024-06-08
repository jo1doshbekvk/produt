import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import './style.css';
import { useNavigate } from 'react-router';

const admin = {
    username: 'admin',
    password: '1234admin'
};


const LoginForm = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('values', values);
        if (values.username === admin.username && values.password === admin.password) {
            navigate('/admin')
        } else {
            alert('У вас неправильный пароль или логин');
        }
    };
    return (
        <Form
            name="basic"
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input className="login-input" placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password className="login-input" placeholder="password" />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

                <Form.Item>
                <Button className="login-button" type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
    </Form>
    );
};

export default LoginForm;