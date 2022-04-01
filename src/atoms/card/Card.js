import React from 'react';
import styles from './Card.module.css';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';

const Card = (props) => {
  const classes = MapPropsToStyles(styles, props.className);
  return <div className={`${styles.card} ${classes}`}>{props.children}</div>;
};

export default Card;
