import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import PostPreviews from '../postPreview/PostPreviews';
import { previewPostData } from '../../data/postData';

const AllPosts = () => {
  return (
    <Row>
      <InfoRow title="All Posts" position="center">
        <PostPreviews data={previewPostData} />
      </InfoRow>
    </Row>
  );
};

export default AllPosts;
