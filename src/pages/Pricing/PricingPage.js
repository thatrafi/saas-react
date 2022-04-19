import React, { Fragment } from 'react';
import CTA from '../../organisms/cta/CTA';
import PricingFAQ from '../../organisms/pricing/PricingFAQ';
import PricingPlan from '../../organisms/pricing/PricingPlan';

const PricingPage = () => {
  return (
    <Fragment>
      <PricingPlan />
      <PricingFAQ />
      <CTA />
    </Fragment>
  );
};

export default PricingPage;
