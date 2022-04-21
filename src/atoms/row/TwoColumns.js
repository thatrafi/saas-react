import React from 'react';
import styles from 'atoms/row/TwoColumns.module.css';

const TwoColumns = (props) => {
  return (
    <div className={styles.twocolumns}>
      <div className={styles.columnWrapper}>{props.children}</div>
    </div>
  );
};

export default TwoColumns;
