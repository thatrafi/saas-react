import React from 'react';
import styles from './IconLabel.module.css';
import CircleCard from '../../atoms/card/CircleCard';
import Icon from '../../atoms/icon/Icon';

const IconLabel = (props) => {
  return (
    <div className={styles.iconLabelWrapper}>
      <CircleCard className={`${props.iconSize || 'small'} ${props.iconColor || 'green'}`}>
        <Icon src={props.iconSrc || 'Checked.png'} />
      </CircleCard>
      <h5>{props.label || 'Label'}</h5>
    </div>
  );
};

export default IconLabel;
