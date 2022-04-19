import React from 'react';
import Row from 'atoms/row/Row';
import InfoIcons from 'organisms/infographic/InfoIcons';

const WhyUs = (props) => {
  return (
    <Row className="fit">
      <InfoIcons
        title="To upscale your business to the next level"
        headline="Why should you work with us?"
        iconSize="medium"
        iconColor="orange"
        infos={props.infos}
      />
    </Row>
  );
};

export default React.memo(WhyUs);
