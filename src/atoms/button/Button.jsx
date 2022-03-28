import React from 'react';
import clsx from 'clsx';

import styles from './Button.module.css';

const Button = (props) => {
  const { type, className, label, onClick } = props;
  const styleButton = {};
  const classArr = className.split(' ');
  var classNames = [];
  classArr.map((c) => {
    if (styles[c]) {
      classNames.push(styles[c]);
    }
  });
  return (
    <button type={type} style={styleButton} onClick={onClick} className={clsx(classNames)}>
      <h6>{label}</h6>
    </button>
  );
};

export default Button;
