import React from "react";
import { Button } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Link style={{ textDecoration: "none" }} to="/">
        <h1 className="logo">
          <span>s</span>hoppe
        </h1>{" "}
      </Link>

      <div className="nav-wrapper">
        <nav>
          <ul className="nav-list">
            <li
              onClick={() => navigate("/shop")}
              icon={<UserOutlined />}
              type="text"
            >
              Shop
            </li>
            <li>Blog</li>
            <li>Our Story</li>
          </ul>
        </nav>

        <div className="divider"></div>

        <div>
          <ul className="nav-list">
            <li>
              <Button icon={<SearchOutlined />} type="text" />
            </li>
            <li>
              <Button icon={<ShoppingCartOutlined />} type="text" />
            </li>
            <li>
              <Button
                onClick={() => navigate("/login")}
                icon={<UserOutlined />}
                type="text"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
