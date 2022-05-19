import React, { Fragment } from 'react';
import Row from 'atoms/row/Row';
import styles from './ErrorPage.module.scss';
const logoName = '{finsweet.';

const ErrorPage = () => {
  return (
    <Fragment>
      <Row>
        <div className={styles.errorWrapper}>
          <p>
            Ooops, something went wrong on <b>{logoName}</b> We are working hard to improve it.
          </p>
        </div>
      </Row>
    </Fragment>
  );
};

export default ErrorPage;
