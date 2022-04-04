import React from 'react';
import NavBrand from '../brand/NavBrand';
import Button from '../../atoms/button/Button';
import { NavLink } from 'react-router-dom';

import './Header.module.css';

const Header = () => {
  return (
    <header>
      <NavBrand link="/" navBrand="finsweet.png" />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <Button type="button" label="Free Trial" className="primary big rounded" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
