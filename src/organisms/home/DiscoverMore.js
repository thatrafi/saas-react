import React from 'react';
import Row from '../../atoms/row/Row';
import InfoIcons from '../infographic/InfoIcons';

const DiscoverMore = (props) => {
  return (
    <Row className="fit">
      <InfoIcons
        title="Analyze your sales and marketing leads"
        headline="Discover More"
        iconSize="big"
        iconColor="violet"
        infos={props.infos}
      />
    </Row>
  );
};

export default DiscoverMore;
