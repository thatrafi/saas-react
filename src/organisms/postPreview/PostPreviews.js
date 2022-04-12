import React from 'react';
import PostPreviewItem from './PostPreviewItem';
import styles from './PostPreviewStyle.module.css';
import { truncateString } from '../../helper/StringHelper';

const PostPreviews = (props) => {
  return (
    <div className={styles.previewsWrapper}>
      {props.data &&
        props.data.map((p, key) => (
          <PostPreviewItem
            img={p.img || 'post1.png'}
            title={p.title}
            previewText={truncateString(p.content, 20)}
            id={p.id}
            key={key}
          />
        ))}
    </div>
  );
};

export default PostPreviews;
