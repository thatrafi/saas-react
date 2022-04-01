import React, { useState } from 'react';
import Button from '../../atoms/button/Button';
import Card from '../../atoms/card/Card';
import styles from './TabAction.module.css';

const TabAction = (props) => {
  const [buttons, setButtons] = useState(
    props.tabs.map(function (value, index) {
      return index === 0 ? { label: value, isSelected: '1' } : { label: value, isSelected: '0' };
    })
  );

  const buttonHandler = (e) => {
    let newArr = [...buttons];
    let selectedIndex = newArr.findIndex((i) => i.label === e.target.outerText);
    newArr.map((x) => {
      x.isSelected = '0';
      return x;
    });
    newArr[selectedIndex].isSelected = '1';
    setButtons(newArr);
    props.onTabClicked(buttons.find((b) => b.isSelected === '1').label);
  };
  return (
    <div className={styles.tabActionCard}>
      <Card className="card fit row violet">
        {buttons.map((btn, key) => (
          <Button
            type="button"
            className={`${btn.isSelected === '1' ? 'primary' : 'violet'} big rounded`}
            onClick={buttonHandler}
            key={key}
            label={btn.label}
          />
        ))}
      </Card>
    </div>
  );
};

export default TabAction;
