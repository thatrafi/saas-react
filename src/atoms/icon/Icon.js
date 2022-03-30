import React from 'react';

import styles from './Icon.modules.css';
// eslint-disable-next-line no-undef
const images = require.context('../../images/icon', true);

const Icon = (props) => {
  const icon = images(`./${props.src}`);
  return <img src={icon} className={styles.icon} />;
};

export default Icon;
