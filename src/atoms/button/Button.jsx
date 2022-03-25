import React from 'react';

import './Button.css';

const Button = (props) => {
  const { isPrimary, type, className, label } = props;
  return (
    <button type={type} className={`${isPrimary ? 'primary' : 'secondary'} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
