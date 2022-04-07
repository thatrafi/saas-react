import React from 'react';
import InfoRow from '../../atoms/row/InfoRow';
import TwoColumns from '../../atoms/row/TwoColumns';
import IconLabel from '../../molecules/iconlabel/IconLabel';
import Row from '../../atoms/row/Row';
import styles from './InfoIcons.module.css';

const InfoIcons = (props) => {
  return (
    <Row>
      <TwoColumns>
        <InfoRow
          headline={props.headline || 'Headline'}
          title={props.title || 'Title'}
          subtitle={
            props.subtitle ||
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.'
          }
        />
        <div className={styles.iconLabelWrapper}>
          {props.infos &&
            props.infos.map((i, key) => (
              <IconLabel
                key={key}
                label={
                  i.label ||
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
                }
                subtitle={i.subtitle}
                iconSize={props.iconSize || 'medium'}
                iconSrc={i.img || 'Arrow.png'}
                iconColor={props.iconColor || 'green'}
              />
            ))}
        </div>
      </TwoColumns>
    </Row>
  );
};

export default InfoIcons;
