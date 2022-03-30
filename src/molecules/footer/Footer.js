import React from 'react';
import Ruler from '../../atoms/ruler/Ruler';
import NavBrand from '../brand/NavBrand';
import SearchBar from '../searchBar/SearchBar';
import styles from './Footer.module.css';
import FooterLink from './FooterLink';
import Icon from '../../atoms/icon/Icon';

const Footer = () => {
  const footerLinks = [
    {
      header: 'Company',
      links: [
        { pathname: 'About Us', link: '/' },
        { pathname: 'Why Choose Us', link: '/' },
        { pathname: 'Pricing', link: '/' },
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
            <SearchBar />
          </div>
        </div>
      </div>
      <div className={styles.footerSocialMedia}>
        <Ruler type="horizontal" />
        <p>Copy right @2022</p>
        <div className={styles.socialLinks}>
          <Icon src="Facebook.png" link="/" />
          <Icon src="Instagram.png" link="/" />
          <Icon src="Instagram.png" link="/" />
          <Icon src="Instagram.png" link="/" />
        </div>
        <Ruler type="horizontal" />
      </div>
    </footer>
  );
};

export default Footer;
