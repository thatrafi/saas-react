import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line no-undef
const images = require.context('../../images/logo', true);

const Logo = (props) => {
  return props.link ? (
    <Link to={props.link}>
      <img src={images(`./${props.src}`)} />
    </Link>
  ) : (
    <img src={images(`./${props.src}`)} />
  );
};

export default Logo;
