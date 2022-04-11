import React from 'react';
import RoundedImage from '../../atoms/image/RoundedImage';
import styles from './PostPreviewStyle.module.css';

const PostPreviewItem = (props) => {
  return (
    <div className={styles.previewItemWrapper}>
      <RoundedImage src={props.img || 'post.png'} />
      <div className={styles.previewItemContent}>
        <h5>{props.title}</h5>
        <p>{props.subtitle}</p>
        <p>{props.date || 'Luke Matthews l November 8, 2021'}</p>
      </div>
    </div>
  );
};

export default PostPreviewItem;
