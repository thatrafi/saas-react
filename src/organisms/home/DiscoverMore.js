import React from 'react';
import Row from '../../atoms/row/Row';
import InfoIcons from '../infographic/InfoIcons';

const DiscoverMore = () => {
  const infos = [
    {
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      label: 'Sales Tracking',
      img: 'Icon-1.svg'
    },
    {
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      label: 'Project Management',
      img: 'Icon-2.svg'
    },
    {
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      label: 'Activity Report',
      img: 'Icon.svg'
    }
  ];
  return (
    <Row>
      <InfoIcons
        title="Analyze your sales and marketing leads"
        headline="Discover More"
        iconSize="big"
        iconColor="violet"
        infos={infos}
      />
    </Row>
  );
};

export default DiscoverMore;
