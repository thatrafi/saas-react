import React from 'react';
import styles from './Input.module.scss';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';

const TextArea = React.forwardRef((props, ref) => {
  const { name, value, placeholder, className, onChange, onClick } = props;
  const classes = MapPropsToStyles(styles, className);
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={classes}
      onChange={onChange}
      onClick={onClick}
      ref={ref}>
      {value}
    </textarea>
  );
});

export default TextArea;
