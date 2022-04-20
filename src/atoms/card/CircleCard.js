import React from 'react';

import styles from 'atoms/card/CircleCard.module.scss';

import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const CircleCard = (props) => {
  const classes = MapPropsToStyles(styles, props.className);
  return <div className={`${styles.circleCard} ${classes}`}>{props.children}</div>;
};

export default CircleCard;
