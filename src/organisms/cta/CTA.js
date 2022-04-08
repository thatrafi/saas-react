import React from 'react';
import Button from '../../atoms/button/Button';
import Row from '../../atoms/row/Row';
import InfoRow from '../../atoms/row/InfoRow';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <Row label="CTA">
      <div className={styles.CTAWrapper}>
        <div className={styles.CTAContent}>
          <InfoRow
            title="Are you ready to grow your business with us?"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
            position="center"
          >
            <Button type="button" className="primary big rounded" label="View Pricing" />
          </InfoRow>
        </div>
      </div>
    </Row>
  );
};

export default CTA;
