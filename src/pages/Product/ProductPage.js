import React, { Fragment } from 'react';
import Row from '../../atoms/row/Row';
import Logos from '../../molecules/logos/Logos';
import HeaderProduct from '../../organisms/product/HeaderProduct';
import ProductFeatures from '../../organisms/product/ProductFeatures';

const ProductPage = () => {
  return (
    <Fragment>
      <HeaderProduct />
      <Row className="fit">
        <Logos />
      </Row>
      <ProductFeatures />
    </Fragment>
  );
};

export default ProductPage;
