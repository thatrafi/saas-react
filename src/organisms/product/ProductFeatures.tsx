import React from 'react';
import Features2 from 'molecules/feature/Features2';
import styles from './ProductFeatures.module.scss';
import Feature from 'models/Feature';

type Props = {
  title?: string;
  features: [Feature];
};

const ProductFeatures: React.FC<Props> = ({ title, features }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1>{title || 'Title'}</h1>
      </div>
      <div className={styles.featuresCard}>
        <Features2 features={features} />
      </div>
    </div>
  );
};

export default ProductFeatures;
