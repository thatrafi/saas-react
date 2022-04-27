import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'atoms/icon/Icon.module.scss';
import { MapPropsToStyles } from 'helper/MapPropsToStyles';

const Icon = (props) => {
  var icon = '';
  var fileName = props.src;
  try {
    icon = require(`images/icon/${fileName}`);
  } catch (error) {
    fileName = 'default.png';
    icon = require(`images/icon/${fileName}`);
  }
  const classes = MapPropsToStyles(styles, props.size);

  return props.link ? (
    <Link to={{ pathname: props.link }} target="_blank">
      <img src={icon} alt={fileName} className={classes} onClick={props.onclick} />
    </Link>
  ) : (
    <img src={icon} alt={fileName} className={classes} onClick={props.onclick} />
  );
};

export default Icon;
