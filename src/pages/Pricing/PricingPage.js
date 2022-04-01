import React from 'react';
import Row from '../../atoms/row/Row';
import CTA from '../../organisms/cta/CTA';
import PricingFAQ from '../../organisms/pricing/PricingFAQ';
import PricingPlan from '../../organisms/pricing/PricingPlan';

const PricingPage = () => {
  return (
    <Row>
      <PricingPlan />
      <PricingFAQ />
      <CTA />
    </Row>
  );
};

export default PricingPage;
