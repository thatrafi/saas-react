import React from 'react';
import Button from 'atoms/button/Button';
import Row from 'atoms/row/Row';
import InfoRow from 'atoms/row/InfoRow';
import styles from './CTA.module.scss';

const CTA = () => {
  // console.log('cta component');
  return (
    <Row label="CTA" className="fit">
      <div className={styles.CTAWrapper}>
        <div className={styles.CTAContent}>
          <InfoRow
            title="Are you ready to grow your business with us?"
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
            position="center">
            <Button type="button" className="primary big rounded" label="View Pricing" />
          </InfoRow>
        </div>
      </div>
    </Row>
  );
};

export default React.memo(CTA);
