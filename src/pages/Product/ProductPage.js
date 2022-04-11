import React, { Fragment } from 'react';
import Row from '../../atoms/row/Row';
import Logos from '../../molecules/logos/Logos';
import HeaderProduct from '../../organisms/product/HeaderProduct';
import ProductFeatures from '../../organisms/product/ProductFeatures';
import InfoGraphic from '../../organisms/infographic/InfoGraphic';
import FeatureHome2 from '../../organisms/home/FeatureHome2';
import CTA from '../../organisms/cta/CTA';

const ProductPage = () => {
  return (
    <Fragment>
      <HeaderProduct />
      <Row className="fit">
        <Logos />
      </Row>
      <ProductFeatures />
      <Row className="fit">
        <InfoGraphic
          headline="Marketing insights"
          title="Data-driven client feedback"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          imgPosition="right"
          imgSrc="graphic1.png"
        />
      </Row>
      <Row className="fit">
        <InfoGraphic
          headline="Time Tracker"
          title="Track your project performance"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          imgPosition="left"
          imgSrc="graphic4.png"
        />
      </Row>
      <Row className="fit">
        <InfoGraphic
          headline="Lead Generation"
          title="More leads that convert"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          imgPosition="right"
          imgSrc="graphic3.png"
        />
      </Row>
      <Row className="fit">
        <InfoGraphic
          headline="Remote Teams"
          title="Real time collaboration"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          imgPosition="left"
          imgSrc="graphic4.png"
        />
      </Row>
      <FeatureHome2 />
      <CTA />
    </Fragment>
  );
};

export default ProductPage;
