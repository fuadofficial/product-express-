import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 My Product Project</p>
      <div className="footer__social">
        <FaFacebook className="footer__icon" />
        <FaTwitter className="footer__icon" />
        <FaInstagram className="footer__icon" />
      </div>
    </footer>
  );
};

export default Footer;
