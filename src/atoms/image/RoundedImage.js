import React from 'react';
import styles from 'atoms/image/RoundedImage.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';
// eslint-disable-next-line no-undef
const images = require.context('images', true);

const RoundedImage = (props) => {
  const classes = MapPropsToStyles(styles, props.className);
  try {
    var img = images(`./${props.src}`);
  } catch (error) {
    throw new Error(error.message);
  }
  return <img src={img} className={`${styles.imgRounded} ${classes}`} />;
};

export default RoundedImage;
