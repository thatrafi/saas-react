import React from 'react';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';

import styles from './Button.module.css';

const Button = (props) => {
  const { type, className, label, onClick } = props;
  const styleButton = {};
  const classes = MapPropsToStyles(styles, className);
  return (
    <button type={type} style={styleButton} onClick={onClick} className={classes}>
      <h6>{label}</h6>
    </button>
  );
};

export default Button;
