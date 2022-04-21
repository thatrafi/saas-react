import React from 'react';
import InfoRow from 'atoms/row/InfoRow';
import Row from 'atoms/row/Row';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <Row>
      <div className={styles.aboutUsWrapper}>
        <InfoRow
          position="center"
          headline="About Us"
          title="We’re a team of data analysts"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
      </div>
    </Row>
  );
};

export default AboutUs;
