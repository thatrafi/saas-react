import React from 'react';
import styles from 'molecules/iconlabel/IconLabel.module.scss';
import CircleCard from 'atoms/card/CircleCard';
import Icon from 'atoms/icon/Icon';

const IconLabel = (props) => {
  return (
    <div className={styles.iconLabelWrapper}>
      <CircleCard className={`${props.iconSize || 'small'} ${props.iconColor || 'green'}`}>
        <Icon src={props.iconSrc || 'Checked.png'} />
      </CircleCard>
      <div className="container">
        <h5>{props.label || 'Label'}</h5>
        {props.subtitle && <p>{props.subtitle}</p>}
      </div>
    </div>
  );
};

export default IconLabel;
