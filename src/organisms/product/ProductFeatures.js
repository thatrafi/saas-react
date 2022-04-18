import React from 'react';
import Features2 from 'molecules/feature/Features2';
import styles from './ProductFeatures.module.css';

const ProductFeatures = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1>{props.title || 'Title'}</h1>
      </div>
      <div className={styles.featuresCard}>
        <Features2 features={props.features} />
      </div>
    </div>
  );
};

export default ProductFeatures;
