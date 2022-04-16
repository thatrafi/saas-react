import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from 'images/logo/finsweet.png';

// eslint-disable-next-line no-undef
const images = require.context('images/logo', true);

const Logo = (props) => {
  var logo = '';
  try {
    logo = images(`./${props.src}`);
  } catch (error) {
    console.log(error);
  }
  return props.link ? (
    <Link to={props.link}>
      <img src={logo || defaultLogo} />
    </Link>
  ) : (
    <img src={logo || defaultLogo} />
  );
};

export default Logo;
