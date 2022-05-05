import React from 'react';
import NavBrand from 'molecules/brand/NavBrand';
import Button from 'atoms/button/Button';
import { NavLink } from 'react-router-dom';
import styles from 'molecules/header/Header.module.scss';
import { routes } from 'route/routes';

const Header = () => {
  const menuNav = routes.filter(
    (item) =>
      item.component !== 'error' && item.component !== 'typography' && item.component !== 'blogPost'
  );
  return (
    <header className={styles.header}>
      <NavBrand link="/" navBrand="finsweet.png" />
      <ul className={styles.NavUl}>
        {menuNav.map((item, index) => (
          <li className={styles.NavItem} key={index}>
            <NavLink to={item.path} className={(nav) => (nav.isActive ? styles.active : '')}>
              {item.title}
            </NavLink>
          </li>
        ))}
        <li className={styles.NavItem}>
          <Button type="button" label="Free Trial" className="primary big rounded" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
