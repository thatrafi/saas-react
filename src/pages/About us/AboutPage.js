import React, { Fragment } from 'react';
import AboutUs from '../../organisms/about/AboutUs';
import FeaturesAbout from '../../organisms/about/FeaturesAbout';
import GoalVision from '../../organisms/about/GoalVision';
import HeaderAbout from '../../organisms/about/HeaderAbout';

const AboutPage = () => {
  return (
    <Fragment>
      <HeaderAbout />
      <AboutUs />
      <GoalVision />
      <FeaturesAbout />
    </Fragment>
  );
};

export default AboutPage;
