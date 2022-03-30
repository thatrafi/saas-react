import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/logo/Logo';

const NavBrand = (props) => {
  return (
    <Link to={props.link}>
      <Logo src={props.navBrand} />
    </Link>
  );
};

export default NavBrand;
