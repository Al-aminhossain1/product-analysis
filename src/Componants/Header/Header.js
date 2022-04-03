import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to Hotel Water Blue Inn</h1>
            <nav>
                <Link to="/">HOME</Link>
                <Link to="/review">REVIEW</Link>
                <Link to="/dashboard">DASHBOARD</Link>
                <Link to="/about">ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;