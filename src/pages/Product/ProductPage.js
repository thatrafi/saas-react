import React, { Fragment } from 'react';
import Row from '../../atoms/row/Row';
import Logos from '../../molecules/logos/Logos';
import HeaderProduct from '../../organisms/product/HeaderProduct';

const ProductPage = () => {
  return (
    <Fragment>
      <HeaderProduct />
      <Row className="fit">
        <Logos />
      </Row>
    </Fragment>
  );
};

export default ProductPage;
