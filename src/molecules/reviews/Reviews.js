import React from 'react';
import Card from '../../atoms/card/Card';
import ReviewItem from '../reviewItem/ReviewItem';
import styles from './Reviews.module.css';

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
