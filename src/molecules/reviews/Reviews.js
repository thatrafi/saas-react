import React from 'react';
import Card from 'atoms/card/Card';
import ReviewItem from 'molecules/reviewItem/ReviewItem';
import styles from 'molecules/reviews/Reviews.module.scss';

const Reviews = () => {
  return (
    <Card className="rounded row">
      <div className={styles.reviewsWrapper}>
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </Card>
  );
};

export default Reviews;
