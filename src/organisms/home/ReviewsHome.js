import React from 'react';
import Row from '../../atoms/row/Row';
import InfoRow from '../../atoms/row/InfoRow';
import Reviews from '../../molecules/reviews/Reviews';

const ReviewsHome = () => {
  return (
    <Row>
      <InfoRow
        titleWidth="42"
        title="The stunning results our customers have experienced"
        position="center">
        <Reviews />
      </InfoRow>
    </Row>
  );
};

export default ReviewsHome;
