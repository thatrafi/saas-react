import React from 'react';

import './Button.css';

const Button = (props) => {
  const { isPrimary, type, className, label } = props;
  const buttonSize = {
    width: props.width,
    height: props.height
  };
  return (
    <button
      type={type}
      style={buttonSize}
      className={`${isPrimary ? 'primary' : 'secondary'} ${className}`}>
      <h6>{label}</h6>
    </button>
  );
};

export default Button;
