import React from 'react';
import Row from '../../atoms/row/Row';
import InfoRow from '../../atoms/row/InfoRow';
import Features from '../../molecules/feature/Features';

const FeatureHome1 = () => {
  const features1 = [
    {
      icon: 'Guard.svg',
      title: 'High security to protect from piracy',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'Thumb.svg',
      title: 'Premium quality performance',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'Headset.svg',
      title: 'Full time customer support - 24/7',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    }
  ];
  return (
    <Row label="Feature 1">
      <InfoRow
        headline="High-quality"
        title="We have the Best Solution for your Business"
        position="center"
      >
        <Features features={features1} color="violet" />
      </InfoRow>
    </Row>
  );
};

export default FeatureHome1;
