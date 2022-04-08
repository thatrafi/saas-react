import React from 'react';
import styles from './Row.module.css';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';

const Row = (props) => {
  const classes = MapPropsToStyles(styles, props.className);
  return <div className={`${styles.row} ${classes}`}>{props.children}</div>;
};

export default Row;
