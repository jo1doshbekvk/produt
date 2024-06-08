import React from "react";
import "./style.css";
import {
  HomeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  HeartOutlined,
  TwitterOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Form, InputNumber } from "antd";

const Shop = () => {
  return (
    <div className="Shop-menu">
      <div className="Shop-img"></div>
      <div className="Shop-text">
        <h1 className="Shop-h1">Lira Earrings</h1>
        <h2 className="Shop-h2">$20,00</h2>
        <ul className="Shop-ui">
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
          <li>
            <StarOutlined />
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
          maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
          consequat sed eu felis.
        </p>
        <div className="cart-menu">
          <Form.Item>
            <InputNumber className="Shop-input" placeholder="1" />
          </Form.Item>
          <Form.Item>
            <InputNumber className="Shop-in" placeholder="ADD TO CART" />
          </Form.Item>
          {/* <input className="Shop-in" type="text" placeholder="ADD TO CART" /> */}
        </div>
        <ul className="Shop-ul">
          <li className="head">
            <HeartOutlined />
          </li>
          <div className="divider"></div>
          <li>
            <HomeOutlined />
          </li>
          <li>
            <FacebookOutlined />
          </li>
          <li>
            <InstagramOutlined />
          </li>
          <li>
            {" "}
            <TwitterOutlined />
          </li>
        </ul>
        <h3>SKU:12</h3>
        <h4>Categories: Fashion, Style</h4>
      </div>
    </div>
  );
};
export default Shop;
