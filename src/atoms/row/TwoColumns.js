import React from 'react';
import styles from './TwoColumns.module.scss';

const TwoColumns = (props) => {
  return (
    <div className={styles.twocolumns}>
      <div className={styles.columnWrapper}>{props.children}</div>
    </div>
  );
};

export default TwoColumns;
