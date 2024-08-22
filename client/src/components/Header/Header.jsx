import React from 'react';
import './Header.css';
import { FaSearch, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <input type="text" placeholder="Search..." className="header__search" />
        <FaSearch className="header__icon search" />
      </div>
      <div className="header__right">
        <FaUser className="header__icon" />
      </div>
    </header>
  );
};

export default Header;
