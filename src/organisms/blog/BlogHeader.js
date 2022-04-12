import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import TwoColumns from '../../atoms/row/TwoColumns';
import RoundedImage from '../../atoms/image/RoundedImage';
import styles from './BlogHeader.module.css';

const BlogHeader = () => {
  return (
    <Row>
      <InfoRow
        position="center"
        title="Read our latest blogs"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor.">
        <div className={styles.columnWrapper}>
          <TwoColumns>
            <InfoRow
              headline="Trending Post"
              title="New invoicing features to help you get paid faster"
              desc="Over the past few months, we’ve added several new features to SaaS Invoicing to help any business get paid faster and streamline their collection workflows.">
              <p>Luke Matthews l November 8, 2021</p>
            </InfoRow>
            <div className={styles.imgWrapper}>
              <RoundedImage src="post.png" />
            </div>
          </TwoColumns>
        </div>
      </InfoRow>
    </Row>
  );
};

export default BlogHeader;
