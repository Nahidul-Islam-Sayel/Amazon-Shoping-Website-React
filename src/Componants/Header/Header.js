import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" srcset=""/>
            <nav>
            <a href="/shop">Shop</a>
            <a href="/order">Order review</a>
            <a href="/manage">Manage</a>
        </nav>
        </div>
      
    );
};

export default Header;