import React from 'react';
import './Footer.css'; 
import Weather from '../Weather';

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li>Features</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Customers</li>
            <li>Brand</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>INFO</h3>
          <ul>
            <li>Terms of Use</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Feedback</li>
            <li>Help Centre</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <p>Follow us</p>
        <div className="social-icons">
          {/* Replace '#' with actual links */}
          <a href="#"><i className="icon-x"></i></a>
          <a href="#"><i className="icon-telegram"></i></a>
          <a href="#"><i className="icon-discord"></i></a>
          <a href="#"><i className="icon-youtube"></i></a>
          <a href="#"><i className="icon-facebook"></i></a>
          <a href="#"><i className="icon-instagram"></i></a>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright © 2023-2024 INFRANIUM. All Rights Reserved</p>
      </div>
      <Weather />
    </footer>
    
    </>
  );
};

export default Footer;

