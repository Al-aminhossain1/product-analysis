import React from 'react';

import CustomLink from '../CustomLink/CustomLink';

import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to Hotel Water Blue Inn</h1>
            <nav>
                <CustomLink to="/">HOME</CustomLink>
                <CustomLink to="/review">REVIEW</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to='/blog'>BLOG</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;