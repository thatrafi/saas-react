import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useState, useMemo } from 'react';
import CTA from 'organisms/cta/CTA';
import PricingFAQ from 'organisms/pricing/PricingFAQ';
import PricingPlan from 'organisms/pricing/PricingPlan';

const PricingPage = () => {
  // console.log('princing page component');
  const [plans, setPlans] = useState([]);
  const [questions, setQuestions] = useState([]);
  // const [selectedPlan, setSelectedPlan] = useState('');
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const [{ data: plans }, { data: faqs }] = await Promise.all([
      axios.get('/api/pricing/plans'),
      axios.get('/api/pricing/faq')
    ]);
    setPlans(plans);
    setQuestions(faqs);
  };
  // get selected plan id
  const selectedPlanHandler = useCallback((data) => {
    // setSelectedPlan(data);
    console.log(data);
  }, []);
  return (
    <Fragment>
      {/* {selectedPlan && <p>{selectedPlan}</p>} */}
      <PricingPlan plans={useMemo(() => plans, [plans])} onSelectedPlan={selectedPlanHandler} />
      <PricingFAQ questions={questions} />
      <CTA />
    </Fragment>
  );
};

export default PricingPage;
