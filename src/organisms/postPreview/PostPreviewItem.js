import React from 'react';
import { Link } from 'react-router-dom';
import RoundedImage from '../../atoms/image/RoundedImage';
import styles from './PostPreviewStyle.module.scss';

const PostPreviewItem = (props) => {
  return (
    <div className={styles.previewItemWrapper}>
      <RoundedImage src={props.img || 'post.png'} />
      <div className={styles.previewItemContent}>
        <Link to={`/post/${props.id}`}>
          <h5>{props.title}</h5>
        </Link>
        <p>{props.previewText}</p>
        <p>{props.date || 'Luke Matthews l November 8, 2021'}</p>
      </div>
    </div>
  );
};

export default PostPreviewItem;
