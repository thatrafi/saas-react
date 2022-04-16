import React, { useState, useEffect } from 'react';
import Row from 'atoms/row/Row';
import PricingItem from 'molecules/pricing/PricingItem';
import TabAction from 'molecules/tabAction/TabAction';
import styles from './PricingPlan.module.css';
import axios from 'axios';

const PricingPlan = () => {
  const [isSelected, setisSelected] = useState(1);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    console.log(isSelected);
  }, [isSelected]);

  useEffect(() => {
    getPricingPlans();
  }, []);

  const getPricingPlans = async () => {
    const { data } = await Promise.resolve(axios.get('/api/pricing/plans'));
    setPlans(data);
  };

  return (
    <Row label="Pricing Plan" className="center">
      <div className={styles.pricingPlansWrapper}>
        <h2>Pricing Plans that suit you</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <TabAction tabs={['Monthly', 'Yearly']} onTabClicked={() => {}} />
        <div className={styles.plans}>
          {plans &&
            plans.map((price, key) => (
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
