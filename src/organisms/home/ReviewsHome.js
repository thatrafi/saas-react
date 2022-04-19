import React from 'react';
import Row from 'atoms/row/Row';
import InfoRow from 'atoms/row/InfoRow';
import Reviews from 'molecules/reviews/Reviews';

const ReviewsHome = (props) => {
  return (
    <Row>
      <InfoRow titleWidth="42" title={props.title || 'Title'} position="center">
        <Reviews reviews={props.reviews} />
      </InfoRow>
    </Row>
  );
};

export default React.memo(ReviewsHome);
