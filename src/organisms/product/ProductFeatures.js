import React from 'react';
import Features2 from '../../molecules/feature/Features2';
import styles from './ProductFeatures.module.css';

const ProductFeatures = () => {
  const features1 = [
    {
      icon: 'Guard.svg',
      title: 'Security and privacy',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Thumb.svg',
      title: 'Premium quality performance',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Headset.svg',
      title: 'Collaborate with others',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Guard.svg',
      title: 'Real time sync',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Thumb.svg',
      title: 'Premium quality performance',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Headset.svg',
      title: 'Collaborate with others',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    }
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h1>Get the best out of your company with our service</h1>
      </div>
      <div className={styles.featuresCard}>
        <Features2 features={features1} />
      </div>
    </div>
  );
};

export default ProductFeatures;
