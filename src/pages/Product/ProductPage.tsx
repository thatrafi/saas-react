import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Row from 'atoms/row/Row';
import Logos from 'molecules/logos/Logos';
import HeaderProduct from 'organisms/product/HeaderProduct';
import ProductFeatures from 'organisms/product/ProductFeatures';
import InfoGraphic from 'organisms/infographic/InfoGraphic';
import FeatureHome2 from 'organisms/home/FeatureHome2';
import CTA from 'organisms/cta/CTA';
import { withErrorBoundary } from 'molecules/error/withErrorBoundary';
import InfoGraphicModel from 'models/InfoGraphicModel';
import Feature from 'models/Feature';

const ProductPage = () => {
  const [features, setFeatures] = useState<[Feature]>();
  const [infographics, setInfoGraphics] = useState<[InfoGraphicModel]>();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await Promise.all([axios.get('/api/product/features'), axios.get('/api/product/infographics')])
      .then(function ([{ data: features }, { data: infographics }]) {
        setFeatures(features);
        setInfoGraphics(infographics);
      })
      .catch((error) => {
        throw new Error(`The unknown error has occurred: ${error}`);
      });
  };

  return (
    <Fragment>
      <HeaderProduct />
      <Row className="fit">
        <Logos />
      </Row>
      {features && (
        <ProductFeatures
          features={features}
          title="Get the best out of your company with our service"
        />
      )}
      {infographics &&
        infographics.map((info, key) => (
          <Row className="fit" key={key}>
            <InfoGraphic
              headline={info.headline}
              title={info.title}
              desc={info.desc}
              imgPosition={key % 2 == 0 ? 'right' : 'left'}
              imgSrc={info.image}
            />
          </Row>
        ))}
      <FeatureHome2 />
      <CTA />
    </Fragment>
  );
};

export default withErrorBoundary(ProductPage);
