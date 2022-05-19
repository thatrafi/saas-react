import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'molecules/footer/FooterLink.module.scss';

const FooterLink = (props) => {
  return (
    <div className={styles.footerLink}>
      <ul>
        <li>
          <h5>{props.headerLabel || 'Top Link'}</h5>
        </li>
        <div data-testid="links">
          {props.links &&
            props.links.map((item, key) => (
              <li key={key}>
                <Link to={item.link}>{item.pathname}</Link>
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
};

export default FooterLink;
