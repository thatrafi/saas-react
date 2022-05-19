import React from 'react';
import styles from 'atoms/input/Input.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const Input = React.forwardRef((props, ref) => {
  const { type, name, value, placeholder, className, onChange, onClick } = props;
  const classes = MapPropsToStyles(styles, className);

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={classes}
      onChange={onChange}
      onClick={onClick}
      ref={ref}
    />
  );
});

export default Input;
