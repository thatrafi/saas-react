import React from 'react';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

import styles from 'atoms/button/Button.module.scss';

const Button = (props) => {
  const { type, className, label, onClick, onClickStyle, clicked, onChange } = props;
  const styleButton = {};
  const classes = MapPropsToStyles(styles, className);
  const onClickClasses = MapPropsToStyles(styles, onClickStyle);

  return (
    <button
      type={type}
      style={styleButton}
      onClick={onClick}
      onChange={onChange}
      className={clicked ? onClickClasses : classes}>
      <h6>{label}</h6>
    </button>
  );
};

export default Button;
