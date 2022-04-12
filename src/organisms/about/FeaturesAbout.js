import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import { featuresAbout } from '../../data/aboutData';
import Features2 from '../../molecules/feature/Features2';
import styles from './FeaturesAbout.module.css';

const FeaturesAbout = () => {
  return (
    <Row>
      <InfoRow
        position="center"
        title="Our corporate values"
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.">
        <div className={`${styles.featuresCard} ${styles.pink}`}>
          <Features2 features={featuresAbout} />
        </div>
      </InfoRow>
    </Row>
  );
};

export default FeaturesAbout;
