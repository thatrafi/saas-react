import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Icon.modules.css';
// eslint-disable-next-line no-undef
const images = require.context('../../images/icon', true);

const Icon = (props) => {
  const icon = images(`./${props.src}`);
  return props.link ? (
    <Link to={props.link}>
      <img src={icon} className={styles.icon} />
    </Link>
  ) : (
    <img src={icon} className={styles.icon} />
  );
};

export default Icon;
