import React from 'react';
import NavBrand from 'molecules/brand/NavBrand';
import Button from 'atoms/button/Button';
import { NavLink } from 'react-router-dom';
import styles from 'molecules/header/Header.module.scss';
import { routes, createTo } from 'route/routes';

const Header = () => {
  createTo('product', { id: 1 });
  return (
    <header className={styles.header}>
      <NavBrand link="/" navBrand="finsweet.png" />
      <ul className={styles.NavUl}>
        {routes
          .filter((item) => !item.isHiddenNav)
          .map((item, index) => (
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
