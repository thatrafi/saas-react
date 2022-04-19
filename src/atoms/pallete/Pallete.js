import React from 'react';
import styles from './Pallete.module.css';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';

const Pallete = (props) => {
  console.log(styles);
  const classes = MapPropsToStyles(styles, props.color);
  return <div className={`${styles.pallete} ${classes}`} />;
};

export default Pallete;
