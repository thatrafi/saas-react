import React from 'react';
import RoundedImage from 'atoms/image/RoundedImage';
import InfoRow from 'atoms/row/InfoRow';
import styles from './HeaderAbout.module.scss';

const HeaderAbout = () => {
  return (
    <div className={styles.headerWrapper}>
      <InfoRow
        position="center"
        title="We are proud of our products"
        desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.">
        <div className={styles.imgWrapper}>
          <RoundedImage src="about1.png" />
          <RoundedImage src="about2.png" />
          <RoundedImage src="about3.png" />
        </div>
      </InfoRow>
    </div>
  );
};

export default HeaderAbout;
