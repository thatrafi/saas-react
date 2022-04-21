import React from 'react';
import Ruler from 'atoms/ruler/Ruler';
import NavBrand from 'molecules/brand/NavBrand';
import FormWithButton from 'molecules/formWithButton/FormWithButton';
import styles from 'molecules/footer/Footer.module.scss';
import FooterLink from 'molecules/footer/FooterLink';
import Icon from 'atoms/icon/Icon';

const Footer = () => {
  const footerLinks = [
    {
      header: 'Company',
      links: [
        { pathname: 'About Us', link: '/' },
        { pathname: 'Why Choose Us', link: '/' },
        { pathname: 'Pricing', link: '/pricing' },
        { pathname: 'Testimonials', link: '/' }
      ]
    },
    {
      header: 'Resources',
      links: [
        { pathname: 'Privacy Policy', link: '/' },
        { pathname: 'Terms and Condition', link: '/' },
        { pathname: 'Blog', link: '/' },
        { pathname: 'Contact Us', link: '/' }
      ]
    },
    {
      header: 'Product',
      links: [
        { pathname: 'Project management', link: '/' },
        { pathname: 'Time tracker', link: '/' },
        { pathname: 'Time scheduler', link: '/' },
        { pathname: 'Lead generate', link: '/' },
        { pathname: 'Remote collaboration', link: '/' }
      ]
    }
  ];
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContent}>
        {footerLinks.map((link, key) => (
          <FooterLink headerLabel={link.header} links={link.links} key={key} />
        ))}
        <div className={styles.footerSubscribe}>
          <NavBrand link="/" navBrand="finsweet-white.png" />
          <div className={styles.footerSubscribeSearch}>
            <h5>Subscribe to our Newslater</h5>
            <FormWithButton type="primary" />
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
