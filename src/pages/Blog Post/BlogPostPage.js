import React, { Fragment } from 'react';
import CTA from '../../organisms/cta/CTA';
import PostDetail from '../../organisms/postDetail/PostDetail';
import ReadMorePosts from '../../organisms/postDetail/ReadMorePosts';

const BlogPostPage = () => {
  return (
    <Fragment>
      <PostDetail />
      <ReadMorePosts />
      <CTA />
    </Fragment>
  );
};

export default BlogPostPage;
