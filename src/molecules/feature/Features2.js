import React from 'react';
import FeatureItem from '../featureItem/FeatureItem';
import styles from './Features.module.scss';

const Features2 = (props) => {
  return (
    <div className={styles.featuresWrapper}>
      <div className={styles.featureItemWrapper}>
        {props.features &&
          props.features.map((feature, key) => (
            <FeatureItem
              key={key}
              iconSrc={feature.icon}
              desc={feature.desc}
              title={feature.title}
            />
          ))}
      </div>
    </div>
  );
};

export default Features2;
