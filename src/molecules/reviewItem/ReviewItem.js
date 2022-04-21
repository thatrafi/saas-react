import React from 'react';
import Card from '../../atoms/card/Card';
import CircleCard from '../../atoms/card/CircleCard';
import styles from './ReviewItem.module.scss';
import image from '../../images/beardedman.png';

const ReviewItem = () => {
  return (
    <Card className="white rounded testimonial">
      <div className={styles.reviewItemWrapper}>
        <h6>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </h6>
        <CircleCard className="blue medium">
          <img src={image} />
        </CircleCard>
        <div className="container">
          <h5>Name</h5>
          <p>Job</p>
        </div>
      </div>
    </Card>
  );
};

export default ReviewItem;
