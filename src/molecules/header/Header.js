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
          <NavLink to="/">Product</NavLink>
        </li>
        <li>
          <NavLink to="/">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact</NavLink>
        </li>
        <li>
          <Button type="button" label="Free Trial" className="primary big rounded" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
