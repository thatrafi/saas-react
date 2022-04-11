import React from 'react';
import Row from '../../atoms/row/Row';
import FeatureItem from '../../molecules/featureItem/FeatureItem';
import styles from './ProductFeatures.module.css';

const ProductFeatures = () => {
  const features1 = [
    {
      icon: 'Guard.svg',
      title: 'High security to protect from piracy',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'Thumb.svg',
      title: 'Premium quality performance',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'Headset.svg',
      title: 'Full time customer support - 24/7',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'Guard.svg',
      title: 'High security to protect from piracy',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'Thumb.svg',
      title: 'Premium quality performance',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'Headset.svg',
      title: 'Full time customer support - 24/7',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    }
  ];
  return (
    <Row className="blurGradient">
      <div className={styles.titleWrapper}>
        <h1>Get the best out of your company with our service</h1>
      </div>
      <div className={styles.featuresWrapper}>
        <div className={styles.featureItemWrapper}>
          {features1 &&
            features1.map((feature, key) => (
              <FeatureItem
                key={key}
                iconSrc={feature.icon}
                desc={feature.desc}
                title={feature.title}
              />
            ))}
        </div>
      </div>
    </Row>
  );
};

export default ProductFeatures;
