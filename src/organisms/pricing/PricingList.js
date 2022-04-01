import React from 'react';
import Row from '../../atoms/row/Row';
import PricingItem from '../../molecules/pricing/PricingItem';

const PricingList = () => {
  const pricing = {
    name: 'Regular',
    subName: 'Starter plan',
    features: [
      { name: 'Limited Projects', isAvailable: true },
      { name: 'Regular Support Business', isAvailable: true },
      { name: '1 Month Free Trial', isAvailable: true },
      { name: '3GB Storage', isAvailable: true },
      { name: 'Ads Preview', isAvailable: true }
    ]
  };
  return (
    <Row label="Pricing List">
      <PricingItem
        headerIcon="Icon@1x.png"
        headerTitle={pricing.name}
        headerSubTitle={pricing.subName}
        features={pricing.features}
      />
    </Row>
  );
};

export default PricingList;
