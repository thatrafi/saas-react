import React, { Fragment } from 'react';
import AboutUs from '../../organisms/about/AboutUs';
import GoalVision from '../../organisms/about/GoalVision';
import HeaderAbout from '../../organisms/about/HeaderAbout';

const AboutPage = () => {
  return (
    <Fragment>
      <HeaderAbout />
      <AboutUs />
      <GoalVision />
    </Fragment>
  );
};

export default AboutPage;
