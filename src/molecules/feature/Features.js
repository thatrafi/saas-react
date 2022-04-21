import React from 'react';
import Card from 'atoms/card/Card';
import FeatureItem from 'molecules/featureItem/FeatureItem';
import styles from 'molecules/feature/Features.module.css';

const Features = (props) => {
  return (
    <div className={props.border ? styles.borderedItem : styles.nonBorderedItem}>
      <Card className={`feature row ${props.color || 'pink'}`}>
        {props.features &&
          props.features.map((feature, key) => (
            <FeatureItem
              key={key}
              iconSrc={feature.icon}
              desc={feature.desc}
              title={feature.title}
            />
          ))}
      </Card>
    </div>
  );
};

export default Features;
