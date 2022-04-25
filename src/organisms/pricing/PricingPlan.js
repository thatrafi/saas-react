import React, { useState, useEffect } from 'react';
import Row from 'atoms/row/Row';
import PricingItem from 'molecules/pricing/PricingItem';
import TabAction from 'molecules/tabAction/TabAction';
import styles from './PricingPlan.module.scss';
import axios from 'axios';
import { filteredArray } from 'helper/ArrayHelper';

const PricingPlan = () => {
  const [isSelected, setisSelected] = useState(`plan${0}`);
  const [plans, setPlans] = useState([]);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterBy, setFilteredBy] = useState(1);
  useEffect(() => {
    // handler for user after pick the plan
  }, [isSelected]);

  useEffect(() => {
    getPricingPlans();
  }, []);

  // side efect tab changed
  useEffect(() => {
    var newArray = plans.filter((el) => el.category.id === filterBy || el.category.id === 0);
    setFilteredPlans(newArray);
  }, [filterBy]);

  // side effect after all plans is fetched
  useEffect(() => {
    var dataCategories = Object.keys(plans).map((k) => plans[k].category);
    setCategory(filteredArray(dataCategories, 'name').filter((a) => a.id != 0));
  }, [plans]);

  const getPricingPlans = async () => {
    const { data } = await Promise.resolve(axios.get('/api/pricing/plans'));
    setPlans(data);
    setFilteredPlans(data.filter((el) => el.category.id === filterBy || el.category.id === 0));
  };

  return (
    <Row label="Pricing Plan" className="center">
      <div className={styles.pricingPlansWrapper}>
        <h2>Pricing Plans that suit you</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <TabAction
          tabs={category}
          onTabChanged={(data) => {
            setFilteredBy(data);
          }}
        />
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

export default PricingPlan;
