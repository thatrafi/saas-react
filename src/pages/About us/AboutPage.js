import React, { Fragment } from 'react';
import AboutUs from 'organisms/about/AboutUs';
import FeaturesAbout from 'organisms/about/FeaturesAbout';
import GoalVision from 'organisms/about/GoalVision';
import HeaderAbout from 'organisms/about/HeaderAbout';
import TeamMembers from 'organisms/about/TeamMembers';
import CTA from 'organisms/cta/CTA';

const AboutPage = () => {
  return (
    <Fragment>
      <HeaderAbout />
      <AboutUs />
      <GoalVision />
      <FeaturesAbout />
      <TeamMembers />
      <CTA />
    </Fragment>
  );
};

export default AboutPage;
