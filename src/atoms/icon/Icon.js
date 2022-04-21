import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Icon.module.scss';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';
// eslint-disable-next-line no-undef
const images = require.context('../../images/icon', true);

const Icon = (props) => {
  var icon = '';
  try {
    icon = images(`./${props.src}`);
  } catch (error) {
    console.log(error);
  }
  const classes = MapPropsToStyles(styles, props.size);
  return props.link ? (
    <Link to={{ pathname: props.link }} target="_blank">
      <img src={icon} className={classes} onClick={props.onclick} />
    </Link>
  ) : (
    <img src={icon} className={classes} onClick={props.onclick} />
  );
};

export default Icon;
