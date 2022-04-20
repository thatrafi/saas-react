import React from 'react';
import Row from 'atoms/row/Row';
import styles from './TextGuide.module.scss';

const TextGuide = () => {
  return (
    <Row>
      <div className={styles.wrapper}>
        <div className={styles.headingWrapper}>
          <div className={styles.heading}>
            <h1>Heading H1</h1>
            <p>Roboto Bold Size 56px Line 110%</p>
          </div>
          <div className={styles.heading}>
            <h2>Heading H2</h2>
            <p>Roboto Bold Size 48px Line 120%</p>
          </div>
          <div className={styles.heading}>
            <h3>Heading H3</h3>
            <p>Roboto Bold Size 36px Line 120%</p>
          </div>
          <div className={styles.heading}>
            <h4>Heading H4</h4>
            <p>Roboto Bold Size 24px Line 140%</p>
          </div>
          <div className={styles.heading}>
            <h5>Heading H5</h5>
            <p>Roboto Bold Size 18px Line 150%</p>
          </div>
          <div className={styles.heading}>
            <h6>Heading H6</h6>
            <p>Roboto Bold Size 16px Line 150%</p>
          </div>
        </div>
        <div className={styles.paragraphWrapper}>
          <div className={styles.paragraph}>
            <div className={styles.paragraphLbl}>
              <h5>Paragraph</h5>
              <p>Roboto Regular Size 16 px Line 150%</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.paragraphLbl}>
              <h5>Paragraph Large</h5>
              <p>Roboto Regular Size 18 px Line 150%</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation.
            </p>
          </div>
          <div className={styles.paragraph}>
            <div className={styles.paragraphLbl}>
              <h5>Label</h5>
              <p>Roboto Bold Size 24 px Line 120%</p>
            </div>
            <span>Lorem ipsum dolor sit amet</span>
          </div>
        </div>
      </div>
    </Row>
  );
};

export default TextGuide;
