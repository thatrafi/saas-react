import axios from 'axios';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import Row from 'atoms/row/Row';
import Logos from 'molecules/logos/Logos';
import CTA from 'organisms/cta/CTA';
import DiscoverMore from 'organisms/home/DiscoverMore';
import FeatureHome1 from 'organisms/home/FeatureHome1';
import FeatureHome2 from 'organisms/home/FeatureHome2';
import HomeInfoGraphic from 'organisms/home/HomeInfoGraphic';
import ReviewsHome from 'organisms/home/ReviewsHome';
import TrialForm from 'organisms/home/TrialForm';
import WhyUs from 'organisms/home/WhyUs';
import { whyUsData, discoverData } from 'data/homeData';
import { withErrorBoundary } from 'molecules/error/withErrorBoundary';

const HomePage = () => {
  const [reviews, setReviews] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const { data } = await Promise.resolve(axios.get('/api/reviews'));
    setReviews(data);
  };
  const formHandler = useCallback((data) => {
    setEmail(data);
  }, []);

  return (
    <Fragment>
      <TrialForm onFormSubmitted={formHandler} />
      <FeatureHome1 />
      <WhyUs infos={whyUsData} />
      <HomeInfoGraphic />
      <Row className="fit">
        <Logos />
      </Row>
      <DiscoverMore infos={discoverData} />
      <FeatureHome2 />
      {reviews && (
        <ReviewsHome
          title="The stunning results our customers have experienced"
          reviews={reviews}
        />
      )}
      <CTA />
    </Fragment>
  );
};

export default withErrorBoundary(HomePage);
