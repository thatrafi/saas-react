import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useState, useMemo } from 'react';
import CTA from 'organisms/cta/CTA';
import PricingFAQ from 'organisms/pricing/PricingFAQ';
import PricingPlan from 'organisms/pricing/PricingPlan';

const PricingPage = () => {
  const [plans, setPlans] = useState([]);
  const [questions, setQuestions] = useState([]);
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
  const selectedPlanHandler = useCallback(() => {}, []);
  return (
    <Fragment>
      <PricingPlan plans={useMemo(() => plans, [plans])} onSelectedPlan={selectedPlanHandler} />
      <PricingFAQ questions={questions} />
      <CTA />
    </Fragment>
  );
};

export default PricingPage;
