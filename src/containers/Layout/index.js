import React from 'react';
import Header from '../Header';
import Footer from "../Footer";
import { Outlet } from 'react-router';
import './style.css';

const Layout = () => {
    return (
        <div className="container layout">
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default Layout;