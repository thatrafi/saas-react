import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Icon.module.css';
import { MapPropsToStyles } from '../../helper/MapPropsToStyles';
// eslint-disable-next-line no-undef
const images = require.context('../../images/icon', true);

const Icon = (props) => {
  const icon = images(`./${props.src}`);
  const classes = MapPropsToStyles(styles, props.size);
  return props.link ? (
    <Link to={props.link}>
      <img src={icon} className={classes} onClick={props.onclick} />
    </Link>
  ) : (
    <img src={icon} className={classes} onClick={props.onclick} />
  );
};

export default Icon;
