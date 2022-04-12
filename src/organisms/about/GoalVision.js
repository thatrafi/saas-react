import React from 'react';
import Row from '../../atoms/row/Row';
import TwoColumns from '../../atoms/row/TwoColumns';
import InfoRow from '../../atoms/row/InfoRow';

const GoalVision = () => {
  return (
    <Row className="violet">
      <TwoColumns>
        <InfoRow
          headline="Our Goals"
          title="To upscale your business to the next level"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
        <InfoRow
          headline="Our Vision"
          title="To provide solutions for growing companies"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
      </TwoColumns>
    </Row>
  );
};

export default GoalVision;
