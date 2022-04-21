import React, { useState } from 'react';
import Card from 'atoms/card/Card';
import Icon from 'atoms/icon/Icon';
import styles from 'molecules/question/QuestionItem.module.scss';

const QuestionItem = (props) => {
  const [clicked, setClicked] = useState(false);
  const iconClickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <Card className={`${clicked ? 'questionExpand' : 'question'} row white`}>
      <h3>{props.question || 'Question Item'}</h3>
      <Icon src={clicked ? 'Minus.png' : 'Expander.png'} size="small" onclick={iconClickHandler} />
      {clicked && (
        <p className={styles.expandText}>
          {props.detail ||
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporinvidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'}
        </p>
      )}
    </Card>
  );
};

export default QuestionItem;
