import React, { useState } from 'react';
import './style.css';
import { Radio } from 'antd';
import LoginForm from './components/LoginForm';

const options = [
    { label: 'Login', value: true },
    { label: 'Register', value: false },
  ];

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    console.log('isLogin', isLogin);
    const handleRadioChange = (e) => {
        setIsLogin(e.target.value);
    };

    return (
        <div className="login">
            <h2 className="login-title">My account</h2>
            <Radio.Group
                options={options}
                value={isLogin}
                onChange={handleRadioChange}
                optionType="button"
                style={{marginBottom: 100}}
            />
            {
                isLogin 
                ? <LoginForm /> 
                : <div>register</div>
            }

        </div>
    );
};

export default Login;