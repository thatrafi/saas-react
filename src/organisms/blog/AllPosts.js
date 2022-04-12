import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import PostPreviews from '../postPreview/PostPreviews';
import { getAllBlogPosts } from '../../actions/blogPostActions';

const AllPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blogPosts.PostsData);
  useEffect(() => {
    dispatch(getAllBlogPosts());
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Row>
      <InfoRow title="All Posts" position="center">
        <PostPreviews data={posts} />
      </InfoRow>
    </Row>
  );
};

export default AllPosts;
