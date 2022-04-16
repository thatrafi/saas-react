import React from 'react';
import styles from 'atoms/ruler/Ruler.module.css';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const Ruler = (props) => {
  const classes = MapPropsToStyles(styles, props.type);
  return <div className={`${styles.ruler} ${classes}`} />;
};

export default Ruler;
