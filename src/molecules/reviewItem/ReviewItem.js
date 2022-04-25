import React from 'react';
import Card from 'atoms/card/Card';
import styles from 'molecules/reviewItem/ReviewItem.module.scss';
import RoundedImage from 'atoms/image/RoundedImage';

const ReviewItem = (props) => {
  return (
    <Card className="white rounded testimonial">
      <div className={styles.reviewItemWrapper}>
        <h6>{props.comment || 'Comment'}</h6>
        <RoundedImage src={props.image} className="medium full" />
        <div className="container">
          <h5>{props.name || 'Name'}</h5>
          <p>{props.title || 'Job'}</p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewItem;
