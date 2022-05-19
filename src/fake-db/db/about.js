import Mock from 'fake-db/mock';
import { featuresAbout, teamData } from 'data/aboutData';

const aboutDB = {
  features: featuresAbout,
  teams: teamData
};

Mock.onGet('/api/about/features').reply(() => {
  const response = aboutDB.features;

  return [200, response];
});

Mock.onGet('/api/about/teams').reply(() => {
  const response = aboutDB.teams;

  return [200, response];
});
