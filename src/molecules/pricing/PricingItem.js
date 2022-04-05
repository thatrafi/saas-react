import React from 'react';
import Card from '../../atoms/card/Card';
import Icon from '../../atoms/icon/Icon';
import IconLabel from '../iconlabel/IconLabel';
import Button from '../../atoms/button/Button';
import styles from './Pricing.module.css';

const PricingItem = (props) => {
  return (
    <Card
      className={`${props.selected ? 'pricingSelected' : 'pricing'} column white`}
      onClick={props.onChange}
    >
      <div className={styles.pricingHeader}>
        <Icon src={props.headerIcon || 'Facebook.png'} size="big" />
        <div className="headerTitle">
          <h3>{props.headerTitle || 'Regular'}</h3>
          <p>{props.headerSubTitle || 'Starter Plan'}</p>
        </div>
      </div>
      <div className={styles.pricingContent}>
        <div className={styles.pricingFeatures}>
          {props.features &&
            props.features.map((f, index) => <IconLabel key={index} label={f.name} />)}
        </div>
        <p className={styles.pricingDescription}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <div className={styles.pricingFooter}>
          <div className="container">
            <h3>{props.price}</h3>
            <p>For Limited Periodt</p>
          </div>
          <Button type="button" label="Get Started" className="primary big rounded"></Button>
        </div>
      </div>
    </Card>
  );
};

export default PricingItem;
