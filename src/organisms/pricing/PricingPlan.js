import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Row from 'atoms/row/Row';
import PricingItem from 'molecules/pricing/PricingItem';
import TabAction from 'molecules/tabAction/TabAction';
import styles from './PricingPlan.module.css';
import { filteredArray } from 'helper/ArrayHelper';

const PricingPlan = (props) => {
  // console.log('Pricing Plans component');
  const [isSelected, setisSelected] = useState(`plan${0}`);
  const [filterBy, setFilteredBy] = useState(1);
  const filteredPlans = useMemo(() => {
    return props.plans.filter((el) => el.category.id === filterBy || el.category.id === 0);
  }, [props.plans, filterBy]);
  const category = useMemo(() => {
    return filteredArray(
      Object.keys(props.plans).map((k) => props.plans[k].category),
      'name'
    ).filter((a) => a.id != 0);
  }, [props.plans]);

  useEffect(() => {
    // handler for user after pick the plan
    props.onSelectedPlan(isSelected);
  }, [isSelected]);

  const TabChangedHandler = useCallback((data) => {
    setFilteredBy(data);
  }, []);

  return (
    <Row label="Pricing Plan" className="center">
      <div className={styles.pricingPlansWrapper}>
        <h2>Pricing Plans that suit you</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <TabAction tabs={category} onTabChanged={TabChangedHandler} />
        <div className={styles.plans}>
          {filteredPlans &&
            filteredPlans.map((price, key) => (
              <PricingItem
                key={key}
                selected={isSelected === price.id}
                onChange={() => setisSelected(price.id)}
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

export default React.memo(PricingPlan);
