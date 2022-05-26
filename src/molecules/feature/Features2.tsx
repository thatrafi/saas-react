import React from 'react';
import FeatureItem from 'molecules/featureItem/FeatureItem';
import styles from 'molecules/feature/Features.module.scss';
import Feature from 'models/Feature';

type FeaturesProps = {
  features: [Feature];
};

const Features2: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <div className={styles.featuresWrapper}>
      <div className={styles.featureItemWrapper} data-testid="featureItem">
        {features &&
          features.length > 0 &&
          features.map((feature, key) => (
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
