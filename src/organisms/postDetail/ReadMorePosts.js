import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import PostPreviews from '../postPreview/PostPreviews';
import { previewPostData } from '../../data/postData';

const ReadMorePosts = () => {
  return (
    <Row>
      <InfoRow title="Read More posts" position="center">
        <PostPreviews data={previewPostData.slice(0, 3)} />
      </InfoRow>
    </Row>
  );
};

export default ReadMorePosts;
