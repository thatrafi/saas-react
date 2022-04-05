import React from 'react';
import Row from '../../atoms/row/Row';
import CTA from '../../organisms/cta/CTA';
import FeatureHome1 from '../../organisms/home/FeatureHome1';
import FeatureHome2 from '../../organisms/home/FeatureHome2';
import HomeInfoGraphic from '../../organisms/home/HomeInfoGraphic';
import ReviewsHome from '../../organisms/home/ReviewsHome';
import TrialForm from '../../organisms/home/TrialForm';
import WhyUs from '../../organisms/home/WhyUs';

const HomePage = () => {
  return (
    <Row>
      <TrialForm />
      <FeatureHome1 />
      <WhyUs />
      <HomeInfoGraphic />
      <FeatureHome2 />
      <ReviewsHome />
      <CTA />
    </Row>
  );
};

export default HomePage;
