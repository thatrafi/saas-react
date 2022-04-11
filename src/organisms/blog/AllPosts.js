import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import PostPreviews from '../postPreview/PostPreviews';

const AllPosts = () => {
  return (
    <Row>
      <InfoRow title="All Posts" position="center">
        <PostPreviews />
      </InfoRow>
    </Row>
  );
};

export default AllPosts;
