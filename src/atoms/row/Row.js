import React from 'react';
import styles from './Row.module.css';

const Row = (props) => {
  return (
    <div className={styles.row}>
      {props.label && <h1>{props.label}</h1>}
      {props.children}
    </div>
  );
};

export default Row;
