import React, { useRef } from 'react';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import styles from './FormWithButton.module.scss';

const FormWithButton = (props) => {
  const textboxRef = useRef('');
  const btnHandler = () => {
    props.onButtonClicked(textboxRef.current.value);
  };
  return (
    <div className={styles.search}>
      <Input
        type={props.inputType || 'text'}
        placeholder={props.inputPlaceholder || 'Enter your text...'}
        ref={textboxRef}
        className={`${props.type === 'primary' ? props.type : 'secondary'} ${
          props.size || 'small'
        } rounded`}
      />
      <Button
        type="submit"
        label={props.btnLabel || 'Submit'}
        className={`${props.type === 'secondary' ? 'primary' : 'secondary'} ${
          props.size || 'small'
        } rounded`}
        onClick={btnHandler}
      />
    </div>
  );
};

export default FormWithButton;
