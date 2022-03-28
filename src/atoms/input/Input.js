import React from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

const Input = React.forwardRef((props, ref) => {
  const { type, name, value, placeholder, className, onChange, onClick } = props;
  const classArr = className.split(' ');
  var classNames = [];
  classArr.map((c) => {
    if (styles[c]) {
      classNames.push(styles[c]);
    }
  });
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={clsx(classNames)}
      onChange={onChange}
      onClick={onClick}
      ref={ref}
    />
  );
});

export default Input;
