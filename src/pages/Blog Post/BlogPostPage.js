import React, { Fragment } from 'react';
import CTA from 'organisms/cta/CTA';
import PostDetail from 'organisms/postDetail/PostDetail';
import ReadMorePosts from 'organisms/postDetail/ReadMorePosts';
import { withErrorBoundary } from 'molecules/error/withErrorBoundary';

const BlogPostPage = () => {
  return (
    <Fragment>
      <PostDetail />
      <ReadMorePosts />
      <CTA />
    </Fragment>
  );
};

export default withErrorBoundary(BlogPostPage);
