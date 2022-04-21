import React, { Fragment } from 'react';
import AllPosts from 'organisms/blog/AllPosts';
import BlogHeader from 'organisms/blog/BlogHeader';
import CTA from 'organisms/cta/CTA';

const BlogPage = () => {
  return (
    <Fragment>
      <BlogHeader />
      <AllPosts />
      <CTA />
    </Fragment>
  );
};

export default BlogPage;
