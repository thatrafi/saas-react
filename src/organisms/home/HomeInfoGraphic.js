import React from 'react';
import Button from '../../atoms/button/Button';
import InfoGraphic from '../../organisms/infographic/InfoGraphic';

const HomeInfoGraphic = () => {
  return (
    <InfoGraphic
      title="More impressions, more conversions"
      subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
      content={<Button type="button" className="primary rounded big" label="Get free Trial" />}
      imgPosition="right"
      imgSrc="graphic2.png"
    />
  );
};

export default HomeInfoGraphic;
