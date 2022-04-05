import React from 'react';
import Card from '../../atoms/card/Card';
import Row from '../../atoms/row/Row';
import FeatureItem from '../../molecules/featureItem/FeatureItem';
import styles from './Features.module.css';

const Features = (props) => {
  return (
    <Row label="Features">
      <div className={styles.FeaturesWrapper}>
        <h1>{props.title || 'Features'}</h1>
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
      </div>
    </Row>
  );
};

export default Features;
