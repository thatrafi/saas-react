import Mock from 'fake-db/mock';

const productDB = {
  features: [
    {
      icon: 'Guard.svg',
      title: 'Security and privacy',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Thumb.svg',
      title: 'Premium quality performance',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Headset.svg',
      title: 'Collaborate with others',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Guard.svg',
      title: 'Real time sync',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Thumb.svg',
      title: 'Premium quality performance',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    },
    {
      icon: 'Headset.svg',
      title: 'Collaborate with others',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    }
  ],
  infographics: [
    {
      id: 'info1',
      image: 'graphic1.png',
      title: 'Data-driven client feedback',
      headline: 'Marketing insights',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      id: 'info2',
      image: 'graphic2.png',
      title: 'Track your project performance',
      headline: 'Time Tracker',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      id: 'info3',
      image: 'graphic3.png',
      title: 'More leads that convert',
      headline: 'Lead Generation',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      id: 'info4',
      image: 'graphic4.png',
      title: 'Real time collaboration',
      headline: 'Remote Teams',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    }
  ]
};

Mock.onGet('/api/product/features').reply(() => {
  const response = productDB.features;

  return [200, response];
});

Mock.onGet('/api/product/infographics').reply(() => {
  const response = productDB.infographics;

  return [200, response];
});
