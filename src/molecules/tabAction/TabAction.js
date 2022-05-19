import React, { useState } from 'react';
import Card from 'atoms/card/Card';
import styles from 'molecules/tabAction/TabAction.module.scss';
import Button from 'atoms/button/Button';

const TabAction = (props) => {
  const [isClicked, setisClicked] = useState(0);

  return (
    <div className={styles.tabActionCard}>
      <Card className="card fit row violet">
        {props.tabs.map((tab, key) => (
          <Button
            type="button"
            className={`violet big rounded`}
            onClickStyle={`primary big rounded`}
            key={key}
            clicked={isClicked === key}
            onClick={() => {
              setisClicked(key);
              props.onTabChanged(tab.id);
            }}
            label={tab.name}
          />
        ))}
      </Card>
    </div>
  );
};

export default React.memo(TabAction);
