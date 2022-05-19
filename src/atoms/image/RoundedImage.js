import React from 'react';
import styles from 'atoms/image/RoundedImage.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const RoundedImage = (props) => {
  const classes = MapPropsToStyles(styles, props.className);
  var img = '';
  var fileName = props.src;
  try {
    img = require(`images/${fileName}`);
  } catch (error) {
    fileName = 'default.png';
    img = require(`images/${fileName}`);
  }

  return <img src={img} alt={fileName} className={`${styles.imgRounded} ${classes}`} />;
};

export default RoundedImage;
