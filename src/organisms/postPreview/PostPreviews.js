import React from 'react';
import PostPreviewItem from './PostPreviewItem';
import styles from './PostPreviewStyle.module.css';

const PostPreviews = (props) => {
  return (
    <div className={styles.previewsWrapper}>
      {props.data &&
        props.data.map((p, key) => (
          <PostPreviewItem
            img={p.img}
            title={p.title}
            previewText={p.previewText}
            id={p.id}
            key={key}
          />
        ))}
    </div>
  );
};

export default PostPreviews;
