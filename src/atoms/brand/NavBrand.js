import React from 'react';
import { Link } from 'react-router-dom';

const NavBrand = (props) => {
  return (
    <Link to={props.link}>
      <h1>{props.name}</h1>
    </Link>
  );
};

export default NavBrand;
