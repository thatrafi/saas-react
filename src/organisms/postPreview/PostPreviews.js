import React from 'react';
import PostPreviewItem from './PostPreviewItem';
import styles from './PostPreviewStyle.module.scss';
import { truncateString } from 'helper/StringHelper';

const PostPreviews = (props) => {
  return (
    <div className={styles.previewsWrapper}>
      {props.data &&
        props.data.map((p, key) => (
          <PostPreviewItem
            img={p.img || 'post1.png'}
            title={p.title}
            previewText={p.content ? truncateString(p.content, 20) : p.previewText}
            id={p.id}
            key={key}
          />
        ))}
    </div>
  );
};

export default PostPreviews;
