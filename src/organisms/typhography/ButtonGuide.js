import React from 'react';
import Button from 'atoms/button/Button';
import Row from 'atoms/row/Row';
import styles from './ButtonGuide.module.scss';

const ButtonGuide = () => {
  return (
    <Row className="fit">
      <h4>Buttons</h4>
      <div className={styles.buttons}>
        <div className="container">
          <p>Normal</p>
          <Button label="Button" className="primary rounded" type="button" />
        </div>
        <div className="container">
          <p>Hover</p>
          <Button label="Button Hover" className="hover big rounded" type="button" />
        </div>
        <div className="container">
          <p>Normal</p>
          <Button label="Button" className="secondary rounded" type="button" />
        </div>
        <div className="container">
          <p>Hover</p>
          <Button label="Button Hover" className="primary rounded big" type="button" />
        </div>
      </div>
    </Row>
  );
};

export default ButtonGuide;
