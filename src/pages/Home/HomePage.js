import React from 'react';
import Row from '../../atoms/row/Row';
import CTA from '../../organisms/cta/CTA';
import Features from '../../organisms/home/Features';
import TrialForm from '../../organisms/home/TrialForm';

const HomePage = () => {
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
    <Row>
      <TrialForm />
      <Features
        features={features1}
        title="We have the Best Solution for your Busines"
        color="violet"
      />
      <Features features={features2} border={featureBorder} />
      <CTA />
    </Row>
  );
};

export default HomePage;
