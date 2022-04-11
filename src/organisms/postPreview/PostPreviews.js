import React from 'react';
import PostPreviewItem from './PostPreviewItem';
import { previewPostData } from '../../data/postData';
import styles from './PostPreviewStyle.module.css';

const PostPreviews = () => {
  return (
    <div className={styles.previewsWrapper}>
      {previewPostData &&
        previewPostData.map((p, key) => (
          <PostPreviewItem img={p.img} title={p.title} subtitle={p.subtitle} key={key} />
        ))}
    </div>
  );
};

export default PostPreviews;
