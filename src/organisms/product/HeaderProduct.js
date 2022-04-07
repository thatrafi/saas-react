import React from 'react';
import Button from '../../atoms/button/Button';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import TwoColumns from '../../atoms/row/TwoColumns';
import styles from './HeaderProduct.module.css';
import dashboardImg from '../../images/dashboard.png';

const HeaderProduct = () => {
  return (
    <Row className="fit">
      <TwoColumns>
        <div className={styles.contentWrapper}>
          <InfoRow
            title="Grow your Sales and Services"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
            <div className={styles.buttons}>
              <Button type="button" className="rounded primary big" label="Get Started" />
              <Button type="button" className="rounded secondary big" label="Contact Us" />
            </div>
          </InfoRow>
        </div>
        <div className={styles.imageWrapper}>
          <img src={dashboardImg} />
        </div>
      </TwoColumns>
    </Row>
  );
};

export default HeaderProduct;
