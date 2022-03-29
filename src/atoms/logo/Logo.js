import React from 'react';

// eslint-disable-next-line no-undef
const images = require.context('../../images/logo', true);

const Logo = (props) => {
  return <img src={images(`./${props.src}`)} />;
};

export default Logo;
