import React from 'react';
import RoundedImage from '../../atoms/image/RoundedImage';
import InfoRow from '../../atoms/row/InfoRow';
import Row from '../../atoms/row/Row';
import styles from './PostDetail.module.css';

const PostDetail = () => {
  return (
    <Row>
      <InfoRow
        position="center"
        title="New invoicing features to help you get paid faster"
        desc="Luke Matthews l  November 8, 2021">
        <div className={styles.detailWrapper}>
          <div className={styles.imgWrapper}>
            <RoundedImage src="BigPost.png" />
          </div>
          <div className={styles.contentWrapper}>
            <h2>This is a blog post headline</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui
              bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque
              varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo
              tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien
              accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere
              metus convallis.
            </p>
            <p>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae
              bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum
              libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis
              ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
              rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec
              enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum.
              Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
              tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit
              gravida malesuada.
            </p>
            <h3>This is a small blog post headline</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim dolor et dui
              bibendum aliquam. Mauris a quam sit amet dui auctor dictum eget a elit. Pellentesque
              varius diam risus, ut condimentum lorem volutpat vel. Nam vel orci pharetra eros
              pulvinar cursus nec quis tellus. Quisque feugiat tortor lectus, pretium interdum justo
              tincidunt a. Donec at congue lectus. Nulla facilisi. Phasellus consectetur sapien
              accumsan lectus tincidunt placerat. Etiam ornare nibh vel dui egestas, eu posuere
              metus convallis.
            </p>
            <div className={styles.quote}>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae
              bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum
              libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis
              ante.
            </div>
            <p>
              Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae
              bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum
              libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis
              ante. Maecenas sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
              rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui. Aenean placerat nec
              enim ut finibus. Maecenas suscipit nibh eu neque egestas, non condimentum mi bibendum.
              Sed est eros, molestie consectetur auctor non, lobortis quis tortor. Nam cursus
              imperdiet massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
              tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris at nisi sed elit
              gravida malesuada.
            </p>
          </div>
        </div>
      </InfoRow>
    </Row>
  );
};

export default PostDetail;
