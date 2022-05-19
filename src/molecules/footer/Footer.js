import React, { useState } from 'react';
import Ruler from 'atoms/ruler/Ruler';
import Logo from 'atoms/logo/Logo';
import FormWithButton from 'molecules/formWithButton/FormWithButton';
import styles from 'molecules/footer/Footer.module.scss';
import FooterLink from 'molecules/footer/FooterLink';
import Icon from 'atoms/icon/Icon';
import { footerLinks } from 'data/footerData';

const Footer = () => {
  const [emailSubs, setEmailSubs] = useState('');
  const formhandler = (data) => {
    setEmailSubs(data);
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        <div data-testid="footerlinks">
          {footerLinks.map((link, key) => (
            <FooterLink headerLabel={link.header} links={link.links} key={key} />
          ))}
        </div>
        <div className={styles.footerSubscribe}>
          <Logo link="/" src="finsweet-white.png" />
          <div className={styles.footerSubscribeSearch}>
            <h5>Subscribe to our Newslater</h5>
            <FormWithButton inputType="email" type="primary" onButtonClicked={formhandler} />
            {emailSubs && <p>Thanks for subscribing {emailSubs}!</p>}
          </div>
        </div>
      </div>
      <div className={styles.footerSocialMedia}>
        <Ruler type="horizontal" />
        <p>Copy right @2022</p>
        <div className={styles.socialLinks}>
          <Icon src="Facebook.png" link="https://www.facebook.com/thatrafi" />
          <Icon src="Twitter.png" link="https://twitter.com" />
          <Icon src="Instagram.png" link="https://www.instagram.com" />
          <Icon src="LinkedIn.png" link="https://www.linkedin.com" />
        </div>
        <Ruler type="horizontal" />
      </div>
    </footer>
  );
};

export default Footer;
