import React from 'react';

import styles from './InfoRow.module.css';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';

const InfoRow = (props) => {
  const classes = MapPropsToStyles(styles, props.position);
  const headerStyle = { textAlign: props.position };
  return (
    <div className={`${styles.row} ${classes}`}>
      <div className={styles.header} style={headerStyle}>
        <span>{props.headline}</span>
        <div className="container">
          <h1>{props.title || 'Title'}</h1>
          <p>{props.subtitle}</p>
        </div>
        <p>{props.desc}</p>
      </div>
      {props.children}
    </div>
  );
};

export default InfoRow;
