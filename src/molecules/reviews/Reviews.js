import React from 'react';
import Card from 'atoms/card/Card';
import ReviewItem from 'molecules/reviewItem/ReviewItem';
import styles from 'molecules/reviews/Reviews.module.scss';

const Reviews = (props) => {
  return (
    <Card className="rounded row">
      <div className={styles.reviewsWrapper}>
        {props.reviews &&
          props.reviews.map((review, key) => (
            <ReviewItem
              key={key}
              name={review.name}
              title={review.title}
              image={review.image}
              comment={review.comment}
            />
          ))}
      </div>
    </Card>
  );
};

export default Reviews;
