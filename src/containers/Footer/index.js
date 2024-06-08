import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
 
} from "@ant-design/icons";
import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <ul className="footer-list">
          <li>Contact</li>
          <li>Terms of services</li>
          <li>Shipping and returns</li>
        </ul>

        <p>
          © 2021 Shelly. <span className="green-span">Terms of use</span> and{" "}
          <span className="green-span">privacy policy.</span>
        </p>
      </div>

      <div className="footer-right">
        <div className="footer-email">
          <p>Give an email, get the newsletter.</p>
        </div>

        <ul className="social-list">
         
          <li>
            <FacebookOutlined />
          </li>
          <li>
            <LinkedinOutlined />
          </li>
          <li>
            <InstagramOutlined />
          </li>
         
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
