import React from 'react';
import Row from '../../atoms/row/Row';
import CTA from '../../organisms/cta/CTA';
import FeatureHome1 from '../../organisms/home/FeatureHome1';
import FeatureHome2 from '../../organisms/home/FeatureHome2';
import TrialForm from '../../organisms/home/TrialForm';
import WhyUs from '../../organisms/home/WhyUs';

const HomePage = () => {
  return (
    <Row>
      <TrialForm />
      <FeatureHome1 />
      <FeatureHome2 />
      <WhyUs />
      <CTA />
    </Row>
  );
};

export default HomePage;
