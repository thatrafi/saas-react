import React from 'react';
import NavBrand from 'molecules/brand/NavBrand';
import Button from 'atoms/button/Button';
import { NavLink } from 'react-router-dom';

import styles from 'molecules/header/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavBrand link="/" navBrand="finsweet.png" />
      <ul className={styles.NavUl}>
        <li className={styles.NavItem}>
          <NavLink to="/" exact activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink activeClassName={styles.active} to="/product">
            Product
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink to="/about" activeClassName={styles.active}>
            About Us
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink to="/pricing" activeClassName={styles.active}>
            Pricing
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink to="/blog" activeClassName={styles.active}>
            Blog
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <NavLink to="/contact" activeClassName={styles.active}>
            Contact
          </NavLink>
        </li>
        <li className={styles.NavItem}>
          <Button type="button" label="Free Trial" className="primary big rounded" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
