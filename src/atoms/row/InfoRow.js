import React from 'react';

import styles from 'atoms/row/InfoRow.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const InfoRow = (props) => {
  const classes = MapPropsToStyles(styles, props.position);
  const headerStyle = { textAlign: props.position };
  const widthStyle = { maxWidth: props.titleWidth + 'rem' };

  return (
    <div className={`${styles.row} ${classes}`}>
      <div className={styles.header} style={headerStyle}>
        {props.headline && <span data-testid="headline">{props.headline}</span>}
        <div style={widthStyle}>
          {props.title && <h2 data-testid="title">{props.title || 'Title'}</h2>}
        </div>
        {props.subtitle && <p data-testid="subtitle">{props.subtitle}</p>}
        {props.desc && <p data-testid="desc">{props.desc}</p>}
      </div>
      {props.children}
    </div>
  );
};

export default InfoRow;
