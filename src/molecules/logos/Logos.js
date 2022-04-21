import React from 'react';
import Logo from 'atoms/logo/Logo';
import styles from 'molecules/logos/Logos.module.scss';

const Logos = () => {
  return (
    <div className={styles.logosWrapper}>
      <Logo src="Logo_1.png" />
      <Logo src="Logo_2.png" />
      <Logo src="Logo_3.png" />
      <Logo src="Logo_4.png" />
      <Logo src="Logo_5.png" />
    </div>
  );
};

export default Logos;
