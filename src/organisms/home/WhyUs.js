import React from 'react';
import Row from '../../atoms/row/Row';
import InfoIcons from '../infographic/InfoIcons';

const WhyUs = () => {
  const infos = [
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      img: 'Arrow.png'
    },
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      img: 'Arrow.png'
    },
    {
      label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      img: 'Arrow.png'
    }
  ];
  return (
    <Row>
      <InfoIcons
        title="To upscale your business to the next level"
        headline="Why should you work with us?"
        iconSize="medium"
        iconColor="orange"
        infos={infos}
      />
    </Row>
  );
};

export default WhyUs;
