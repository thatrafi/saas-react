import React from 'react';
import styles from 'atoms/image/RoundedImage.module.scss';
// eslint-disable-next-line no-undef
const images = require.context('images', true);

const RoundedImage = (props) => {
  try {
    var img = images(`./${props.src}`);
  } catch (error) {
    console.log(error);
  }
  return <img src={img} className={styles.imgRounded} />;
};

export default RoundedImage;
