import React from 'react';
import Pallete from 'atoms/pallete/Pallete';
import Row from 'atoms/row/Row';
import styles from './ColorPallete.module.scss';

const ColorPallete = () => {
  const colors = ['primary', 'blue', 'violet', 'labelGradient', 'blurGradient', 'white'];
  return (
    <Row className="fit">
      <div className={styles.wrapper}>
        <h4>Color Pallete</h4>
        <div className={styles.palleteWrapper}>
          {colors && colors.map((c, key) => <Pallete key={key} color={c} />)}
        </div>
      </div>
    </Row>
  );
};

export default ColorPallete;
