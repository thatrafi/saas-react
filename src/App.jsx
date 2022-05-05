import 'fake-db';
import React, { Fragment } from 'react';
import * as Sentry from '@sentry/react';
import Footer from 'molecules/footer/Footer';
import Header from 'molecules/header/Header';
import 'styles/style.scss';
import { createRoutes } from 'route/routes';

const App = () => {
  const routesComp = createRoutes();
  return (
    <Fragment>
      <div className="main">
        <Header />
        {routesComp}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Sentry.withProfiler(App);
