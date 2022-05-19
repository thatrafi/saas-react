import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import AboutUs from 'organisms/about/AboutUs';
import FeaturesAbout from 'organisms/about/FeaturesAbout';
import GoalVision from 'organisms/about/GoalVision';
import HeaderAbout from 'organisms/about/HeaderAbout';
import TeamMembers from 'organisms/about/TeamMembers';
import CTA from 'organisms/cta/CTA';
import { withErrorBoundary } from 'molecules/error/withErrorBoundary';

const AboutPage = () => {
  const [features, setFeatures] = useState([]);
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const [{ data: features }, { data: teams }] = await Promise.all([
      axios.get('/api/about/features'),
      axios.get('/api/about/teams')
    ]);
    setFeatures(features);
    setTeams(teams);
  };

  return (
    <Fragment>
      <HeaderAbout />
      <AboutUs />
      <GoalVision />
      <FeaturesAbout features={features} />
      <TeamMembers teams={teams} />
      <CTA />
    </Fragment>
  );
};

export default withErrorBoundary(AboutPage);
