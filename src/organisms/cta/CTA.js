import React from 'react';
import Button from '../../atoms/button/Button';
import Row from '../../atoms/row/Row';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <Row label="CTA">
      <div className={styles.CTAWrapper}>
        <div className={styles.CTAContent}>
          <div className="container">
            <h1>Are you ready to grow your business with us?</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          </div>
          <Button type="button" className="primary big rounded" label="View Pricing" />
        </div>
      </div>
    </Row>
  );
};

export default CTA;
