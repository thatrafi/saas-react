import React from 'react';
import { Link } from 'react-router-dom';
import defaultLogo from 'images/logo/finsweet.png';

const Logo = (props) => {
  var logo = '';
  var fileName = props.src;
  try {
    logo = require(`images/logo/${fileName}`);
  } catch (error) {
    fileName = 'default.png';
    logo = require(`images/logo/${fileName}`);
  }

  return props.link ? (
    <Link to={props.link}>
      <img src={logo || defaultLogo} alt={fileName} />
    </Link>
  ) : (
    <img src={logo || defaultLogo} alt={fileName} />
  );
};

export default Logo;
