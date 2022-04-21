import React, { useState, useEffect } from 'react';
import Row from '../../atoms/row/Row';
import PricingItem from '../../molecules/pricing/PricingItem';
import TabAction from '../../molecules/tabAction/TabAction';
import styles from './PricingPlan.module.scss';

const PricingPlan = () => {
  const [isSelected, setisSelected] = useState(1);
  useEffect(() => {
    console.log(isSelected);
  }, [isSelected]);
  const pricing = [
    {
      name: 'Regular',
      subName: 'Starter plan',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '3GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: 'Free'
    },
    {
      name: 'Platinum',
      subName: 'For the best results',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '20GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$324'
    },
    {
      name: 'Standard',
      subName: 'Most popular',
      features: [
        { name: 'Limited Projects', isAvailable: true },
        { name: 'Regular Support Business', isAvailable: true },
        { name: '1 Month Free Trial', isAvailable: true },
        { name: '10GB Storage', isAvailable: true },
        { name: 'Ads Preview', isAvailable: true }
      ],
      price: '$234'
    }
  ];
  return (
    <Row label="Pricing Plan" className="center">
      <div className={styles.pricingPlansWrapper}>
        <h2>Pricing Plans that suit you</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <TabAction tabs={['Monthly', 'Yearly']} onTabClicked={() => {}} />
        <div className={styles.plans}>
          {pricing &&
            pricing.map((price, key) => (
              <PricingItem
                key={key}
                selected={isSelected === key}
                onChange={() => setisSelected(key)}
                headerIcon="Icon@1x.png"
                headerTitle={price.name}
                headerSubTitle={price.subName}
                features={price.features}
                price={price.price}
              />
            ))}
        </div>
      </div>
    </Row>
  );
};

export default PricingPlan;
