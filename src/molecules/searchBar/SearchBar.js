import React, { useRef } from 'react';
import Button from '../../atoms/button/Button';
import Input from '../../atoms/input/Input';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
  const emailRef = useRef('');
  const btnSearchHandler = () => {
    props.onSearchClicked(emailRef.current.value);
  };
  return (
    <div className={styles.search}>
      <Input
        type="email"
        placeholder="Enter your email..."
        ref={emailRef}
        className="primary small rounded"
      />
      <Button
        type="submit"
        label="Submit"
        className="secondary small rounded"
        onClick={btnSearchHandler}
      />
    </div>
  );
};

export default SearchBar;
