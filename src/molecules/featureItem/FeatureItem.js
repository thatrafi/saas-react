import React from 'react';
import Icon from '../../atoms/icon/Icon';
import styles from './FeatureItem.module.scss';

const FeatureItem = (props) => {
  return (
    <div className={styles.featureItemWrapper}>
      <Icon src={props.iconSrc || 'Icon@2x-1.png'} size={props.size || 'medium'} />
      <h4>{props.title || 'Lorem ipsum dolor sit amet'}</h4>
      <p>
        {props.desc ||
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'}
      </p>
    </div>
  );
};

export default FeatureItem;
