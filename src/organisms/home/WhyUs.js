import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import TwoColumns from '../../atoms/row/TwoColumns';
import IconLabel from '../../molecules/iconlabel/IconLabel';
import Row from '../../atoms/row/Row';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <Row>
      <TwoColumns>
        <InfoRow
          headline="Why should you work with us?"
          title="To upscale your business to the next level"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
        />
        <div className={styles.iconLabelWrapper}>
          <IconLabel
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            iconSize="medium"
            iconSrc="Arrow.png"
            iconColor="pink"
          />
          <IconLabel
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            iconSize="medium"
            iconSrc="Arrow.png"
            iconColor="pink"
          />
          <IconLabel
            label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
            iconSize="medium"
            iconSrc="Arrow.png"
            iconColor="pink"
          />
        </div>
      </TwoColumns>
    </Row>
  );
};

export default WhyUs;
