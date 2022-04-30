import React from 'react';
import FeatureItem from 'molecules/featureItem/FeatureItem';
import styles from 'molecules/feature/Features.module.scss';

const Features2 = (props) => {
  return (
    <div className={styles.featuresWrapper}>
      <div className={styles.featureItemWrapper} data-testid="featureItem">
        {props.features &&
          props.features.length > 0 &&
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
