import React from 'react';
import styles from 'atoms/pallete/Pallete.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const Pallete = (props) => {
  const classes = MapPropsToStyles(styles, props.color);

  return <div className={`${styles.pallete} ${classes}`} />;
};

export default Pallete;
