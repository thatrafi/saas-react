import React from 'react';
import Row from 'atoms/row/Row';
import InfoRow from 'atoms/row/InfoRow';
import Features from 'molecules/feature/Features';

const FeatureHome2 = () => {
  const features2 = [
    {
      icon: 'Gear.svg',
      title: 'Advanced 256-bit encryption',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'IconMessenger.svg',
      title: 'Simple collaboration tools',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    },
    {
      icon: 'AI.svg',
      title: 'Customizable AI features',
      desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
    }
  ];
  const featureBorder = true;
  return (
    <Row label="Feature 2">
      <InfoRow title="Feature" position="center">
        <Features features={features2} border={featureBorder} />
      </InfoRow>
    </Row>
  );
};

export default React.memo(FeatureHome2);
